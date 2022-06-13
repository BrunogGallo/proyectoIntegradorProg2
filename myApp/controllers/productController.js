const db = require('../database/models')

const users = db.User
const productos = db.Producto
const comentarios = db.Comentario

const productoController = {

    showOne: function (req, res) { //Este es mostrar producto, detallesProducto
        let busqueda = req.query.search
        productos.findAll({
            where: [{nombreProducto: busqueda}]
        })
        then ((result) => {
            let fi1 = new Date(result.createdAt);
            fechaPost = `${fi1.getDate()}-${fi1.getMonth() + 1}-${fi1.getFullYear()}`;

            let fi2 = new Date(result.updatedAt);
            fechaEdit = `${fi2.getDate()}-${fi2.getMonth() + 1}-${fi2.getFullYear()}`;

            let producto = {
                nombreProducto: result.nombreProducto,
                descripcion: result.descripcion,
                imagen: result.imagen,
                comentarios: result.idComentario,
                fechaPosteo: fechaPost,
                fechaEdicion: fechaEdit
            }

            return res.render ('products', {
                productos: producto,
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