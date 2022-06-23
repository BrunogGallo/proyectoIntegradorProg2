//Importamos cheeck
const express = require('express'); //tenemos que requerir al modulo tercero que es express 
const router = express.Router(); //voy a estar utilizando un metodo que tiene ese objeto. el metodo es router.
//dice, del objeto express quiero solicitarleun metodo. 

const productController = require ('../controllers/productController'); 

let multer = require('multer'); //requiero multer y path
let path = require('path');

let storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/products'))
    },
    filename : function(req, file, cb) {
      
        /*          name campoDelForm          -   26052022                 .png  */
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
});

let upload = multer({ storage : storage}) //hacemos upload multer y declaramos una variable donde usamos multer y ponemos una destination. es a donde queremos que se guarde esa img. 


router.get ('/detalles/:id', productController.mostrarProducto) //recibe un producto se va a encargar de la ejecucion de la pantalla productController

router.get ('/agregar', productController.agregarProducto) //

router.post ('/agregar', upload.single('imagen'), productController.guardarProducto) //con el metodo post maneja los datos de agregar producto

router.post ('/borrar/:id', productController.eliminarProducto) //id tiene dos puntos, cuando le indicamos que tiene dos puntos, es que estoy esperando un parametro. si no tiene dos puntos entonces es un componente mas. 

router.get ('/editar/:id', productController.editarProducto)

router.post ('/editar/:id', productController.actualizarProducto) 

router.post ('/comentar/:id', productController.comentar)

module.exports = router //lo exportamos para que sea utilizado, para que otro archivo lo utilize 
//el que va a utilizarlo es el entry point, es el archivo base de toda mi aplicacion 