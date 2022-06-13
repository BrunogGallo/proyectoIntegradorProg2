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

        if (info.email == "") {
            errors.message = 'El campo de email esta incompleto'
        } else if (info.password == ""){
            errors.message = 'El campo de contraseña esta incompleto'
        } else {
            user.findOne ({
                where: [{email: info.email}]
            })
        }

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

module.exports = userController