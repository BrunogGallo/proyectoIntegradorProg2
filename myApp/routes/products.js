//Importamos cheeck
const express = require('express'); //
const router = express.Router();

const productController = require ('../controllers/productController'); //

router.get ('/detalles/:id', productController.mostrarProducto) //

router.get ('/agregar', productController.agregarProducto) //

router.post ('/agregar', productController.guardarProducto)

router.post ('/borrar/:id', productController.eliminarProducto)

router.get ('/editar/:id', productController.editarProducto)

router.post ('/editar/:id', productController.actualizarProducto)

router.get ('/comentar', productController.comentar)

module.exports = router //