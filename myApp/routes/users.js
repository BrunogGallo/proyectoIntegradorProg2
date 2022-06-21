//Importamos cheeck
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/profile', userController.login)

router.post ('/edit', userController.procesarLogin)

router.post ('/register', userController.procesarRegister)

router.get ('/register', userController.register)


module.exports = router;
