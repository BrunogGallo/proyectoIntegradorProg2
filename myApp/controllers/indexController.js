const db = require('../db/data')

const indexController = {
    index: function (req, res) {
        return res.render ('index', {'user': db.user})
    },
    search: function (req, res) {
        return res.render ('search-results')
    }
}

module.exports = indexController