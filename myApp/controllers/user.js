const { apellido } = require("./models/usuario");
var users = require ("./models/usuario")

let user = {
perfil : function (req,res) {
    res.render('profile', { nombre : users.nombre + " " + users.apellido });
}
};
module.exports = user