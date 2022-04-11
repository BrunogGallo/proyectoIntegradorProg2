const express = require('express');
const router = express.Router();

const productController = require ('../controllers/productController');

router.get ('/', productController.mostrarProducto)

router.get ('/add', productController.agregarProducto)

module.exports = router