//Imp. 
const express = require('express');
const { index } = require('../controllers/indexController');
const router = express.Router();
const indexController = require ('../controllers/indexController');
//Roouter .get metodo http que estamos utilizando, conta de 2 params, path q es el sufijo y nombre del recurso
//El segundo declaro una funcion que cuenta con 2 parametros que son la variable que almacena la info.
//Primer parametro el nombre del modulo
//segundo parametro, metodos q se encrgan de manejar los pedidos
router.get ('/', indexController.index)

router.get ('/search', indexController.search)

module.exports = router;
