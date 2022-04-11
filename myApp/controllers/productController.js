const db = require('../db/data')

const productoController = {
    index: function (req, res) {
        res.render ('product')
    }

} 

module.exports = productoController