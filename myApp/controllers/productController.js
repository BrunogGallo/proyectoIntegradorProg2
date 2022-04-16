const db = require('../db/data')

const productoController = {
    mostrarProducto: function (req, res) {
        return res.render ('products')
    },
    agregarProducto: function (req, res) {
        return res.render ('product-add', {'user': db.user})
    },
} 

module.exports = productoController