const db = require('../database/models')

const users = db.User
const productos = db.Producto
const comentarios = db.Comentario
//Requiriendo el modulo de bcryptjs-->libreria de node, que es para ecriptar las contra.
const bcrypt = require('bcryptjs')

const userController = {
    login: function (req, res) {
        return res.render ('login',)
    },

    procesarLogin: function (req, res) {
        //let info me trae la informacion que yo envie en el formulario , mail y passwor
    
        let info = req.body;
        let errors = {};
//y fue a user y busco uno que tuviera el mailn, info.mail y ahora  el then me trae un result de esto q le pedi 
        user.findOne({
            where : [{ email :  info.email}]
            //este result que me trae es la informacion del usuario, de la base de datos , ese rsult es un objeto literal
            //Con todas la propiedades, datavalue, email id, etc , toda la info del usuario esta en la propiedad data valuees
            //Nosotros queremos guardar ese datavalues
        }).then((result) => {
            //El result de abajo me trae la informacion del usuario
            //Lo que se ejecuta es lo siguiente--> me trjo la informacion, info que fue la informacion  q yo envie en el formulario, busco uno, me trae un result, ese result
            //es la informarcion dlel usuario de la base de datos, ese result es un obj literal con todas las formas.  Nosotros queremos guaradar ese database .
            //Si clave correcta es verdadero va a entrar si existe un mai, eso es un paso a pasao de lo que hace, 
            //Dentro de clave correcya utilizo req. resiion .user y le pomgo esa prop
            if (result != null) {
                //si clave correcta es verdadero va a entrar a existe un mail y la clave es correcta 
                //si clave correcta es falso va a entrar a existe un mail y clave es incorrecta
                //si clave correcta es falso y msil tambien va a no existe mail 
                //dentro de clave correcta tengo que utilizar la session poara guardar informacion, voy a gauardar el result.datavalues
                //Ahi guardo la informacion del uusario, le pongo un valor y a ese valor lo voy a traer de la variable result 
                let claveCorrecta = bcryptjs.compareSync(info.password  , result.password )
                if (claveCorrecta) {
                    //datavalue me trae la informacion y me lo va a guardar en la session 
                    req.session.user = result.dataValues 
                    //Ahora impprimo esto aca, hago console loge
                   // console.log( req.session.user );

                    //Evaluar si el check box esta en true o existe, pa evaluar un chek box en la parte de backend 
                    //Pongo if, hsgo un condicional y voy a velauar, como evaluo este check box, req.body
                   if(req.body.remember =! undefined){
                       //si existe el check box de recordar hago una cookie, se crea enviandosela al usuario, uso el objeto res
                       //guardo la indo en la cookie por 5 minutos 
                       res.cookie ('userId' , req.session.user.id, {maxAge: 1000 * 60 * 5})
                   } 

                    //Cuando me logue quiero que me envies a la pagina principql de autos 'movies/all")
                    return res.redirect('/Productos')
                    
                    return res.send("Existe el mail " + result.email + " y la clave es correcta")
                } else {
                    return res.send("Existe el mail " + result.email + " pero la clave es incorrecta")
                }

            } else {
                return res.send("No existe el mail " + info.email) 
            }
        });
    },
    profile: function (req, res) {
        return res.render ('profile', { 
            'user': user,
            'productos': productos,
            'comentarios': comentarios
        }) 
    },
    register: function (req, res) {
        return res.render ('register', {'user': user})
    },
    profileEdit: function (req, res) {
        return res.render ('profile-edit', {'user': user})
    }
}

module.exports = userController;