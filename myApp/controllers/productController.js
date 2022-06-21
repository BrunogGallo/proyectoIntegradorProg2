const db = require('../database/models') //requerimos los modelos. requerimos la conexion a la base de datos y los modelos creados. 
//cuando queremos filtrar por criterios que no sea  igualdad necesitamos utilizar los operadores de sequelize, en este caso const db = require
const users = db.User //el alias que le pondre a mi modelo
const productos = db.Producto
const comentarios = db.Comentario

const productoController = {

    detallesProducto: function (req, res) { //Funciona como un showOne
        let id = req.params.id
        comentarios.findAll ({      //seleccionamos el modelo sobre el cual queremos aplicar el método. en este caso: comentarios.
            where: [{idProducto: id}]  //para buscar todos los datos registrados en la tabla debemos usar findAll()
                                      //dentro de where pasamos el atributo de acuerdo con la columna de la tabla y el valor a buscar. 
                                      //para filtrar datos usamos un objeto literal con el atributo where y un metodo de busqueda.  
        })
        productos.findByPk(id) // sequelize utiliza una función llamada FIND para buscar información en la base de datos. 
         //Las opciones de FIND  son findAll(), findByPk(), findOne().
         //El metodo findByPick() busca un registro que coincida con un valor de una clave primaria. 
        .then ((result) => { //la función findAll() devuelve una promesa, por lo tanto necesitamos usar .then()
                   //Escribimos el codigo de método                   
            let fi1 = new Date(result.createdAt);
            fechaPost = `${fi1.getDate()}-${fi1.getMonth() + 1}-${fi1.getFullYear()}`;

            let fi2 = new Date(result.updatedAt);
            fechaEdit = `${fi2.getDate()}-${fi2.getMonth() + 1}-${fi2.getFullYear()}`;

            let producto = {
                nombreProducto: result.nombreProducto,
                descripcion: result.descripcion,
                imagen: result.imagen,
                fechaPosteo: fechaPost,
                fechaEdicion: fechaEdit
            }
        

            return res.render ('products', {
                datosProducto: producto,
                comentarios: comentarios
            })
        })
    },

    
    mostrarProducto: function (req, res) {
        return res.render ('products', {
            'productos': productos[0],
            'comentarios': comentarios,
        })
    },
    agregarProducto: function (req, res) {
        return res.render ('product-add', {'user': user})
    },
} 

// Exporto para usar los datos en otros archivos
module.exports = productoController