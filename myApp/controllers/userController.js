const db = require('../db/data')
const user = db.user
const productos = db.productos
const comentarios = db.comentarios

const userController = {
    login: function (req, res) {
        return res.render ('login',)
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