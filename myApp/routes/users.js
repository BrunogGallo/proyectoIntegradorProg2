//IMPORTAMOS CHEECK
var express = require('express');
var router = express.Router();
var user = require ("../controllers/user")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/perfil', user.perfil)

module.exports = router;
