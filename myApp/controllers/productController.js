const db = require('../database/models')

const users = db.User
const productos = db.Producto
const comentarios = db.Comentario

const productoController = {

    detallesProducto: function (req, res) { //Funciona como un showOne
        let id = req.params.id
        comentarios.findAll ({
            where: [{idProducto: id}]
        })
        productos.findByPk(id)
        .then ((result) => {
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

module.exports = productoController