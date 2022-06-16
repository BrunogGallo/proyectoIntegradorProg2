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
            if (result != null) {
                let claveCorrecta = bcryptjs.compareSync(info.password  , result.password )
                if (claveCorrecta) {
                    return res.send("Existe el mail " + result.email + " y la clave es correcta")
                } else {
                    return res.send("Existe el mail " + result.email + " pero la clave es incorrecta")
                }

            } else {
                return res.send("No xiste el mail " + info.email) 
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