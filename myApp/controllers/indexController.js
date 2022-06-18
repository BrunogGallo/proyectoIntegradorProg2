//Almaceno en la variable db los datos q tengo en el archivo data db, uso los datos de info q estan en data en este archivo
const db = require('../database/models')

const indexController = {
    //Escribimos metodos, se encarga de manejar los requiest
    //Express utiliza el metodo render(entregar), metodo que se encuentra dentro del objeto response
    //asi enviamos la vista al navegador, procesa el archivo ejs y 
    //envia el html. Reenderiza la vista y la envia al navegador
    //recibe un string --> nombre del archivo a renderizar. El segundo parametro es un obj literal quealmacena info
    // queremos que queremos enviar con la vista
    //los uso en funcion de comen

    index: (req, res) => { //Puedo cambiar el nombre findAll, esto iria para el index

        db.Producto.findAll({
            include: [{
                association: 'usuario' //Traemos los datos de usuario
                }, {
                association: 'comentarios', //Traemos los comentarios
                    include: {
                        association: 'comentarioUsuario' //Con este alias llamamos a la relacion entre comentarios y usuario
                    }
                }
            ],
            order: [
                ['createdAt', 'DESC'] //Ordenaoms los datos recibidos de mas nuevo a mas viejo de forma descendente
            ]
        })
            .then((result) =>{
                console.log(result);
                return res.render ('index', {
                    datos: result
                });
            })
            .catch ((error) =>{
                console.log(error);
            })

    },

    search: (req, res) => { //Este es para resultado de busquedas
        let busqueda = req.query.search
        productos.findAll({
            where: [
                {nombreProducto: { [op.like]: busqueda}}, 
                {descripcion: {[op.like]: busqueda} }
            ],
            include: [{
                association: 'usuario' //Traemos los datos de usuario
            }],
            include:[{
                association: 'comentarios', //Traemos los comentarios
                include: [{
                    association: 'comentarioUsuario' //Con este alias llamamos a la relacion entre comentarios y usuario
                }]
            }],
            order: [
                ['createdAt', 'DESC'] //Ordenaoms los datos recibidos de mas nuevo a mas viejo de forma descendente
            ]
        })
        .then((result) =>{
            return res.render ('search-results', {
                datos: result
            });
        })
    },
    

    search: function (req, res) {
        return res.render ('search-results', {
            'user': users,
            'productos': productos,
            'comentarios': comentarios
        })
    },
    login: function (req, res) {
        return res.render ('login',)
    },
    register: function (req, res) {
        return res.render ('register', {'user': users})
    },
}
// Exporto para usar los datos en otros archivos
module.exports = indexController