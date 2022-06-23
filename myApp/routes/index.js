//Imp. 
const express = require('express');
const router = express.Router();
const indexController = require ('../controllers/indexController');

let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({ //Implementamos configuracion de Multer
    destination : function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/users'))
    },
    filename : function(req, file, cb) {
      
        /*          name campoDelForm          -   26052022                 .png  */
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
});

let upload = multer({ storage : storage})

router.get ('/', indexController.index)

router.get ('/search', indexController.search)

router.get ('/profile/:id', indexController.profile)

router.get ('/profileEdit/:id', indexController.profileEdit)

router.post ('/profileEdit/:id', upload.single('fotoPerfil'), indexController.profileUpdate)

router.post ('/seguir/:id', indexController.follow)

router.post ('/dejarDeSeguir/:id', indexController.unfollow)

module.exports = router;
