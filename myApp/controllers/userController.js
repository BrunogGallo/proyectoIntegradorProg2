const db = require('../database/models')

const users = db.User
const productos = db.Producto
const comentarios = db.Comentario
const bcrypt = require('bcryptjs')

const userController = {
    login: function (req, res) {
        return res.render ('login',)
    },

    procesarLogin: function (req, res) {
        let info = req.body;
        let errors = {};

        user.findOne({
            where : [{ email :  info.email}]
        }).then((result) => {
            //El result de abajo me trae la iunformacion del usuario
            //Lo que se ejecuta es lo siguiente--> me trjo la informacion, info que fue la informacion  q yo envie en el formulario, busco uno, me trae un result, ese result
            //es la informarcion dlel usuario de la base de datos, ese result es un obj literal con todas las formas.  Nosotros queremos guaradar ese database .
            //Si clave correcta es verdadero va a entrar si existe un mai, eso es un paso a pasao de lo que hace, 
            //Dentro de clave correcya utilizo req. resiion .user y le pomgo esa prop
            if (result != null) {
                let claveCorrecta = bcryptjs.compareSync(info.password  , result.password )
                if (claveCorrecta) {

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