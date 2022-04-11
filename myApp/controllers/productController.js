const db = require('../db/data')

const productoController = {
    mostrarProducto: function (req, res) {
        return res.render ('product')
    },
    agregarProducto: function (req, res) {
        return res.render ('product-add')
    },
} 

module.exports = productoController