const db = require('../database/models')

const users = db.Usuario 
const productos = db.Producto
const comentarios = db.Comentario
//Requiriendo el modulo de bcryptjs-->modulo de node, que es para ecriptar las contra.

const bcrypt = require('bcryptjs')

//const bcrypt = require('bcrypt')

const userController = {
    login: function (req, res) {
      
        return res.render ('login', {title: 'login'})
    },

    procesarLogin: function (req, res) {
        
        let info = req.body; //OBTENGO INFO C DE F
        let errors = {};
        if (info.email == "") {
            errors.message = "El input de email esta vacio";
            res.locals.errors = errors;
            return res.render("login");
            
        } else if (info.contraseña == ""){
            errors.message = "El input de contraseña esta vacio";
            res.locals.errors = errors;
            return res.render('login')

        }  else {
            users.findOne({ // usario,email que tengo 
                where : [{ email :  info.email}] //Uso el email para identificar al usuario, ya que es un dato unico
            }).then((result) => {
                if (result != null) {
                    let claveCorrecta = bcrypt.compareSync(info.contraseña  , result.contraseña )
                    if (claveCorrecta) {
                        req.session.user = result.dataValues; //datos del usuario que encontre
    
                        /* Evaluar si el checkbox esta en true o existe */
    
                        if (req.body.recordar != undefined) {
                            res.cookie('userId', req.session.user.id, { maxAge : 1000 * 60 * 5}) //Guardo en una cookie con nombre userId el id del usuario encontrado que ahora esta guardado en session
                        }
                       
                        return res.redirect("/")
                    } else {
                        /* Este paso se ejecuta por cada validacion que queramos */
                        errors.message = "La clave es incorrecta"
                        res.locals.errors = errors;
                        return res.render('login')
                        .catch ((error) =>{
                            console.log(error);
                        }) 
                    }
                    
                } else {
                    /* Este paso se ejecuta por cada validacion que queramos */
                    errors.message = "No existe el email " + info.email
                    res.locals.errors = errors;
                    return res.render('login')
                    .catch ((error) =>{
                        console.log(error);
                    }) 
                }
            });
           
        }
    },
    logout: function (req, res, next) {
        req.session.user = null;
        res.clearCookie('userId');
        res.redirect('/')
        .catch ((error) =>{
            console.log(error);
        }) 
    },
    register : (req, res) => {
        return res.render("register",);
    },
    procesarRegister : (req, res) => {
        let info = req.body;
        /* validaciones del form */
        let errors = {};
        console.log(info.usuario[0])
        if (info.nombre == "") {
            errors.message = "El input de nombre esta vacio";
            res.locals.errors = errors;
            return res.render('register')
            
        } else if (info.email == ""){
            errors.message = "El input de email esta vacio";
            res.locals.errors = errors;
            return res.render('register')

        }  else if (info.contrasenia == ""){
            errors.message = "El input de contraseña esta vacio";
            res.locals.errors = errors;
            return res.render('register')

        }
        else {
           
            let contraseñaEncriptada = bcrypt.hashSync(info.contrasenia, 10);
            
            if (info.filename == undefined) { //En el caso de que no suba una foto
                users.create({
                    nombre : info.nombre,
                    apellido: info.apellido,
                    email : info.email,
                    nombreUsuario : info.usuario,
                    fechaNacimiento : info.fechaNacimiento,
                    contraseña : contraseñaEncriptada,
                    remember_token: "false",
                    createdAt : new Date(),
                    updatedAt : new Date(),
                    fotoPerfil : null,
                })
                .then((result) => {
                    return res.redirect("/")
                })
                .catch ((error) =>{
                    console.log(error);
                }) 
            } else { //Si sube una foto
                users.create({
                nombre : info.nombre,
                apellido: info.apellido,
                email : info.email,
                nombreUsuario : info.usuario,
                fechaNacimiento : info.fechaNacimiento,
                contraseña : contraseñaEncriptada,
                remember_token: "false",
                createdAt : new Date(),
                updatedAt : new Date(),
                fotoPerfil : req.file.filename,
            })
            .then((result) => {
                return res.redirect("/")
            })
            .catch ((error) =>{
                console.log(error);
            }) 
            }
            
        }
    }
}


module.exports = userController;