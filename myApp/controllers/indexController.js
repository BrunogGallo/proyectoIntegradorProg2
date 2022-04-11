const db = require('../db/data')

const indexController = {
    index: function (req, res) {
        return res.render ('index')
    }
}

module.exports = indexController