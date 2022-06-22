const db = require('../database/models'); //requerimos los modelos. requerimos la conexion a la base de datos y los modelos creados. 
//cuando queremos filtrar por criterios que no sea  igualdad necesitamos utilizar los operadores de sequelize, en este caso const db = require

const users = db.User //el alias que le pondre a mi modelo

const productos = db.Producto
const comentarios = db.Comentario
const productController = {



    mostrarProducto: function (req, res) {
        db.products.findByPk(req.params.id, { include: { all: true, nested: true } })
            .then(function (product) {
                console.log(product.dataValues);
                res.render('product_detail', { product });
            })
            .catch(function (error) {
                console.log(req.params.id)
                res.send(error);
            })
    },

    agregarProducto: function (req, res) {
        if (!req.session.user) {
            throw Error('Not authorized.')
        }
        res.render('add_product');
    },

    guardarProducto: function (req, res) {
        if (!req.session.user) {
            return res.render('add_product', { error: 'Not authorized.' });
        }
        req.body.user_id = req.session.user.id;
        if (req.file) req.body.img = (req.file.path).replace('public', '');
        db.products.create(req.body)
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                res.send(error);
            })
        //image es el nombre del campo del formulario que carga la imagen
        //para que venga el req.file primero le pusimos al formulario el enctype="multipart/form-data" 
        //en req.file hay muchas propiedades y la mas importante es el path que tiene la ruta completa en donde esta el archivo
        //el path lo aclaramos nosotoros en la carpeta destin   ation en la ruta   
    },

    eliminarProducto: function (req, res) {
        if (!req.session.user) {
            throw Error('Not authorized.')
        } //chequear
        db.products.destroy({ where: { id: req.params.id } })
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    editarProducto: function (req, res) {
        db.products.findByPk(req.params.id)
            .then(function (products) {
                res.render('product_edit', { products });
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    actualizarProducto: function (req, res) {
        if (req.file) req.body.img = (req.file.path).replace('public', '');
        db.products.update(req.body, { where: { id: req.params.id } })
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    comentarioProducto: function (req, res) {
      
        if(!req.session.user){ 
            return res.render('login', {error:'Iniciá sesión/ registrate para comentar'})
        }
        // Set user from session user
        req.body.user_id = req.session.user.id;
        // Set book from url params
        req.body.product_id = req.params.id;
        db.comment.create(req.body)
            .then(function () {
                res.redirect('/products/detail/' + req.params.id)
            })
            .catch(function (error) {
                res.send(error);
            })
        
    },
}

module.exports = productController;