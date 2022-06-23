//Importamos cheeck
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/* Requerir modulos de multer y path */
let multer = require('multer');
let path = require('path');

/* Configurar multer */

let storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/users'))
    },
    filename : function(req, file, cb) {
      
        /*          name campoDelForm          -   26052022                 .png  */
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
});

let upload = multer({ storage : storage})

/*Get users listing*/
router.get ('/register', userController.register);
router.post('/register', upload.single('fotoPerfil') , userController.procesarRegister); //con el metodo post maneja los datos de agregar producto

router.get('/login', userController.login);
router.post ('/login', userController.procesarLogin);

router.post('/logout', userController.logout);




module.exports = router;
