//Importamos cheeck
const express = require('express'); //tenemos que requerir al modulo tercero que es express 
const router = express.Router(); //voy a estar utilizando un m'etodo que tiene ese objeto. el metodo es router.
 //dice, del objeto express quiero solicitarleun metodo. 

const productController = require ('../controllers/productController'); //


router.get ('/detalles/:id', productController.mostrarProducto) //recibe un producto se va a encargar de la ejecucion de la pantalla productController

router.get ('/agregar', productController.agregarProducto) //

router.post ('/agregar', productController.guardarProducto)

router.post ('/borrar/:id', productController.eliminarProducto)

router.get ('/editar/:id', productController.editarProducto)

router.post ('/editar/:id', productController.actualizarProducto)

router.post ('/comentar', productController.comentar)

module.exports = router //