//Importamos cheeck
const express = require('express');
const router = express.Router();

const productController = require ('../controllers/productController');

router.get ('/detalles/id:?', productController.mostrarProducto)

router.get ('/product-add', productController.agregarProducto)

router.post ('/product-add', productController.guardarProducto)

router.get ('profile-edit', productController.eliminarProducto)

router.get ('/product', productController.editarProducto)

router.post ('/product', productController.actualizarProducto)

router.get ('/', productController.comentarioProducto)

module.exports = router