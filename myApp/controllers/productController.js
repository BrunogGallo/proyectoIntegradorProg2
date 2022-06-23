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
        if(req.session.user == undefined){  
            return res.redirect('/users/login') 
        }
        res.render('product-add');
    },

    guardarProducto: function (req, res) {
        if(req.session.user == undefined){  
            return res.redirect('/users/login') 
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
        if(req.session.user == undefined){  
            return res.redirect('/users/login') 
        }
        idProducto = req.params.id
        db.Comentario.destroy( //Elimino los comentarios relacionados al producto, ya que si no lo hacemos no podemos borrar el producto
            {where: {idProducto: idProducto}}
            )
            .then ((result) =>{
                db.Producto.destroy(
                { where: { id: idProducto} }
                )
            })
            .then(function () {
                res.redirect('/profile/' + req.session.user.id)
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    editarProducto: function (req, res) {
        if(req.session.user == undefined){  
            return res.redirect('/users/login') 
        }
        idProducto = req.params.id
        db.Producto.findByPk(idProducto)
            .then(function (products) {
                res.render('product-edit', { products }); 
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    actualizarProducto: function (req, res) {
        if(req.session.user == undefined){  
            return res.redirect('/users/login') 
        }

        idProducto = req.params.id
        datosNuevos = req.body
        idUsuario = req.session.user.id
        if (req.file == undefined) { //En el caso de que el usuario no haya subido una foto nueva
            db.Producto.update({
                nombreProducto: datosNuevos.nombreProducto,
                descripcion: datosNuevos.descripcion,
                idUsuario: idUsuario
            }, {
                where: [{id: idProducto}]
            })
                .then ((result) =>{
                    res.redirect('/products/detalles/' + idProducto)
                })
                    .catch ((error) =>{
                        console.log(error);
                    })
        } else { //En el caso de que incluya una foto nueva
            fotoNueva = req.file.filename; 
            db.Producto.update({
                nombreProducto: datosNuevos.nombreProducto,
                imagen: fotoNueva,
                descripcion: datosNuevos.descripcion,
                idUsuario: idUsuario
            }, {
                where: [{id: idProducto}]
            })
                .then ((result) =>{
                    res.redirect('/products/detalles/' + idProducto)
                })
                    .catch ((error) =>{
                        console.log(error);
                    })
        }
    },

    comentar: function (req, res) {
      
        if(req.session.user == undefined){  //unicamente los usuarios logueados puedan comentar 
            return res.redirect('/users/login') //sino, me va redirigir a otro lado 
        }
        texto = req.body.texto  //extraigo el texto del formulario 
        idUsuario= req.session.user.id; //
        idProducto = req.params.id; // 
        comentarios.create({
            idUsuario: idUsuario,
            idProducto: idProducto,
            texto: texto
        })
            .then ((result) =>{
                res.redirect('/products/detalles/' + idProducto)
            })
            .catch ((error) =>{
                res.send(error)
            })
        
    },
}

module.exports = productController;