const db = require('../database/models') //Requiero los modelos de la base de datos y los almaceno en db
const op = db.Sequelize.Op //Requiero los operadores de sequalize y los almaceno en op


const indexController = {
    //Escribimos metodos, se encarga de manejar los requiest
    //Express utiliza el metodo render(entregar), metodo que se encuentra dentro del objeto response
    //asi enviamos la vista al navegador, procesa el archivo ejs y 
    //envia el html. Reenderiza la vista y la envia al navegador
    //recibe un string --> nombre del archivo a renderizar. El segundo parametro es un obj literal quealmacena info
    // queremos que queremos enviar con la vista
    //los uso en funcion de comen

    index: (req, res) => { 

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
            ],
            limit: 20 //Pongo un limite para la cantidad de datos que pueda traer el findall
        })
            .then((result) =>{
                console.log(result);
                return res.render ('index', { //Renderizo la vista almacenando los datos buscados bajo el nombre datos
                    datos: result
                });
            })
            .catch ((error) =>{
                console.log(error);
            })

    },

    search: (req, res) => { //Este es para resultado de busquedas
        let busqueda = req.query.search //Capturo la busqueda del usuario en el form de la qs
        db.Producto.findAll({
            include: [{
                association: 'usuario' //Traemos los datos de usuario
                }, {
                association: 'comentarios', //Traemos los comentarios
                    include: {
                        association: 'comentarioUsuario' //Con este alias llamamos a la relacion entre comentarios y usuario
                    }
                }],
            where: {
                [op.or]: [ //El operador or permite que busque tanto por descripcion como por nombre del producto
                {'nombreProducto': {[op.like]: `%${busqueda}%`}}, //el operador like permite encontrar datos que se asemejen a la busqueda, sin estar restricto a datos que sean identos
                {'descripcion': {[op.like]: `%${busqueda}%`}} 
                ]
            },
            order: [
                ['createdAt', 'DESC'] //Ordenaoms los datos recibidos de mas nuevo a mas viejo de forma descendente
            ]
        })
        .then((result) =>{
            console.log(result);
            return res.render ('search-results', {
                datos: result,
            });
        })
        .catch ((error) =>{
            console.log(error);
        })
    },
    
    login: function (req, res) {
        return res.render ('login',)
    },
    register: function (req, res) {
        return res.render ('register')
    },
}
// Exporto para usar los datos en otros archivos
module.exports = indexController