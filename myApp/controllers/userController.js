const db = require('../database/models')

const users = db.User
const productos = db.Producto
const comentarios = db.Comentario
//Requiriendo el modulo de bcryptjs-->libreria de node, que es para ecriptar las contra.
const bcrypt = require('bcrypt')

const userController = {
    login: function (req, res) {
        return res.render ('login', {title: 'login'})
    },

    procesarLogin: function (req, res) {
        
        let info = req.body;
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
            users.findOne({
                where : { email :  info.email}
            }).then((result) => {
                if (result != null) {
                    let claveCorrecta = bcrypt.compareSync(info.contraseña  , result.contraseña )
                    if (claveCorrecta) {
                        req.session.users = result.dataValues;
    
                        /* Evaluar si el checkbox esta en true o existe */
    
                        if (req.body.remember != undefined) {
                            res.cookie('userId', req.session.idUsuario, { maxAge : 1000 * 60 * 5})
                        }
                       
                        return res.redirect("/productos/all")
                    } else {
                        /* Este paso se ejecuta por cada validacion que queramos */
                        errors.message = "La clave es incorrecta"
                        res.locals.errors = errors;
                        return res.render('login');
                    }
                    
                } else {
                    /* Este paso se ejecuta por cada validacion que queramos */
                    errors.message = "No existe el email " + info.email
                    res.locals.errors = errors;
                    return res.render('login');
                }
            });
           
        }
    },
    logout: function (req, res, next) {
        req.session.user = null;
        res.clearCookie('idUsuario');
        res.redirect('/')
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
            let fotoPerfil = req.file.filename;
           
            let userParaGuardar = {
        
                nombre : info.usuario[0],
                apellido: info.usuario[1],
                email : info.email,
                contraseña : contraseñaEncriptada,
                remember_token: "false",
                createdAt : new Date(),
                updatedAt : new Date(),
                fotoPerfil : fotoPerfil,

            }
            console.log(userParaGuardar)
            users.create(userParaGuardar)
            .then((result) => {
                return result.redirect("/users")
            });
            
        }

    }

}


module.exports = userController;