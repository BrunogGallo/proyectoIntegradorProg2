//Importamos cheeck
const express = require('express');
const router = express.Router();

const productController = require ('../controllers/productController');

router.get ('/detalles/id:?', productController.mostrarProducto)

router.get ('/product-add', productController.agregarProducto)

router.get ('/guardarProducto', productController.guardarProducto)

router.get ('', productController.eliminarProducto)

router.get ('', productController.editarProducto)

router.get ('', productController.actualizarProducto)

router.get ('', productController.comentarioProducto)

module.exports = router