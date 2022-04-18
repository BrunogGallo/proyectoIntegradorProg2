//Importamos cheeck
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/profile', userController.profile)

router.get ('/edit', userController.profileEdit)


module.exports = router;
