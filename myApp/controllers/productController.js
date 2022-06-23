const db = require('../database/models'); //requerimos la conexion a la base de datos y los modelos creados. 
//cuando queremos filtrar por criterios que no sea  igualdad necesitamos utilizar los operadores de sequelize, en este caso const db = require

const users = db.Usuario //el alias que le pondre a mi modelo
const comentarios = db.Comentario
const productController = {



    mostrarProducto: function (req, res) {
        db.Producto.findByPk(req.params.id, { include: { all: true, nested: true } })
            .then(function (product) {
                console.log(product.comentarios);
                res.render('products', {datosProducto: product }); //render es renderizar la VISTA
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
        res.render('product-add');
    },

    guardarProducto: function (req, res) {
        if (!req.session.user) {        //si en el objeto request hay una propiedad llamada session y esa propiedad sesson
                                        //tiene ademas adentro una propiedad user, si existe por favor redirigero a la pagina que quiere ver el susuario
        return res.render('login');     //si no esta en sesion el usuario, quiero que lo renderises y lo envies al login
        }

        idProducto = req.params.id //almaceno el id que viene con la url
        idUsuario = req.session.user.id //almaceno el id del usuario que esta logeado
        datosProducto = req.body //extraigo los datos del form

        if (req.file == undefined) { //en el caso de que el usuario no haya guardado foto
            fotoProducto = null
        } else {
            fotoProducto = req.file.filename; //llamo fotoProducto al nombre del archivo subido por el usuario
        }
        db.Producto.create({ //creo el nuevo registro en la tabla de productos
            nombreProducto: datosProducto.nombreProducto,
            imagen: fotoProducto,
            descripcion: datosProducto.descripcion,
            idUsuario: idUsuario
        })
        .then ((result) =>{
            res.redirect("/profile/" + idUsuario)
        })
            
        //image es el nombre del campo del formulario que carga la imagen
        //para que venga el req.file primero le pusimos al formulario el enctype="multipart/form-data" 
        //en req.file hay muchas propiedades y la mas importante es el path que tiene la ruta completa en donde esta el archivo
        //el path lo aclaramos nosotoros en la carpeta destin   ation en la ruta   
    },

    eliminarProducto: function (req, res) {
        if (!req.session.user) {
            throw Error('Not authorized.')
        } 
        db.Producto.destroy({ where: { id: req.params.id } }) //de la tabla productos, borrá el que tiene este id
                                                           //el cual sería el req.params.id, una vez q lo borra me lleva a la home 
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    editarProducto: function (req, res) {
        db.Producto.findByPk(req.params.id)
            .then(function (products) {
                res.render('product-edit', { products }); 
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    actualizarProducto: function (req, res) {
        if (req.file) req.body.img = (req.file.path).replace('public', '');
        db.Producto.update(req.body, { where: { id: req.params.id } })
            .then(function () {
                res.redirect('/products/detalles/' + req.params.id)
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    comentar: function (req, res) {
      
        if(req.session.user == undefined){  //unicamente los usuarios logueados puedan comentar 
            return res.redirect('/users/login') //sino, me va redirigir a otro lado 
        }
        texto = req.body.texto
        idUsuario= req.session.user.id;
        idProducto = req.params.id;
        comentarios.create({
            idUsuario: idUsuario,
            idProducto: idProducto,
            texto: texto
        })
            .then(function () {
                res.render('/products/detalles/' + req.params.id)
            })
            .catch(function (error) {
                res.send(error);
            })
        
    },
}

module.exports = productController;