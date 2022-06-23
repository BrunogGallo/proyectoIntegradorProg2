//Importamos cheeck
const express = require('express'); //tenemos que requerir al modulo tercero que es express 
const router = express.Router(); //voy a estar utilizando un metodo que tiene ese objeto. el metodo es router.
 //dice, del objeto express quiero solicitarleun metodo. 


const productController = require ('../controllers/productController'); //


router.get ('/detalles/:id', productController.mostrarProducto) //recibe un producto se va a encargar de la ejecucion de la pantalla productController

router.get ('/agregar', productController.agregarProducto) //

router.post ('/agregar', productController.guardarProducto)

router.post ('/borrar/:id', productController.eliminarProducto) //id tiene dos puntos, cuando le indicamos que tiene dos puntos, es que estoy esperando un parametro. si no tiene dos puntos entonces es un componente mas. 

router.get ('/editar/:id', productController.editarProducto)

router.post ('/editar/:id', productController.actualizarProducto) 

router.get ('/comentar', productController.comentar)

module.exports = router //lo exportamos para que sea utilizado, para que otro archivo lo utilize 
//el que va a utilizarlo es el entry point, es el archivo base de toda mi aplicacion 