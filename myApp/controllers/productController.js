const db = require('../db/data')
const user = db.user
const productos = db.productos
const comentarios = db.comentarios

const productoController = {
    mostrarProducto: function (req, res) {
        return res.render ('products', {
            'productos': productos[0],
            'comentarios': comentarios,
        })
    },
    agregarProducto: function (req, res) {
        return res.render ('product-add', {'user': user})
    },
} 

module.exports = productoController