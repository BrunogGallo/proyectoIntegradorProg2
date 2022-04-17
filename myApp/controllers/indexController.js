const db = require('../db/data')
const user = db.user
const productos = db.productos
const comentarios = db.comentarios

const indexController = {
    index: function (req, res) {
        return res.render ('index', {
            'user': user,
            'productos': productos,
            'comentarios': comentarios
        })
    },
    search: function (req, res) {
        return res.render ('search-results')
    }
}

module.exports = indexController