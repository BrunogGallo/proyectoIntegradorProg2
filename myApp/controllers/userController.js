const db = require('../db/data')

const userController = {
    login: function (req, res) {
        return res.render ('login')
    },
    profile: function (req, res) {
        return res.render ('profile')
    },
    register: function (req, res) {
        return res.render ('register')
    }
}

module.exports = userController