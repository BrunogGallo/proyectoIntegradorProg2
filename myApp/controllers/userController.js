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
    },
    profileEdit: function (req, res) {
        return res.render ('profile-edit')
    }
}

module.exports = userController