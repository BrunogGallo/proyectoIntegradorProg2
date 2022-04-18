//Almaceno en la variable db los datos q tengo en el archivo data db, uso los datos de info q estan en data en este archivo
const db = require('../db/data')
//lo mismo
const user = db.user
const productos = db.productos
const comentarios = db.comentarios

const indexController = {
     //Escribimos metodos, se encarga de manejar los requiest
    //Express utiliza el metodo render(entregar), metodo que se encuentra dentro del objeto response
    //asi enviamos la vista al navegador, procesa el archivo ejs y 
    //envia el html. Reenderiza la vista y la envia al navegador
    //recibe un string --> nombre del archivo a renderizar. El segundo parametro es un obj literal quealmacena info
    // queremos que queremos enviar con la vista
    //los uso en funcion de comen
   
    index: function (req, res) 
    {
        return res.render ('index', {
            'user': user,
            'productos': productos,
            'comentarios': comentarios
        })
    },
    search: function (req, res) {
        return res.render ('search-results', {
            'user': user,
            'productos': productos,
            'comentarios': comentarios
        })
    },
    login: function (req, res) {
        return res.render ('login',)
    },
    register: function (req, res) {
        return res.render ('register', {'user': user})
    },
}
// Exporto para usar los datos en otros archivos
module.exports = indexController