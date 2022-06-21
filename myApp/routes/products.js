//Importamos cheeck
const express = require('express');
const router = express.Router();

const productController = require ('../controllers/productController');

router.get ('/detalles/id:?', productController.mostrarProducto)

router.get ('/agregar', productController.agregarProducto)

router.get ()
module.exports = router