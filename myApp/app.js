var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Requiero express para poder implementarlo y db para acceder a los modelos 
const session = require('express-session');
const db = require("./database/models");

//Declaro routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/products')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Middleware de session
app.use (session({
  secret: 'myApp', //este dato permite identificar la pagina web, IDENTIFICADOR UNICO
  resave: false,  //2nda propiedad lo  ponemos en 
  saveUninitialized: true //CON ESTO YA OCMENZAMOS  A TENER INFO GUARDADA EN SESSION 
}))

//Middleware de session guardado en locals
app.use(function(req, res, next) {
  res.locals.user = null
   if (req.session.user != undefined) //Chequeo si hay un usuario logeado
    {  
    res.locals.user = req.session.user; //Declaro res.locals para poder utilizar los datos del usuario
    }
  return next();
})

//Middleware cookies
app.use(function (req, res, next) {
  if (req.cookies.userId != undefined && req.session.user == undefined) { //Si hay un user en cookies pero session esta vacio
    let idUsuario = req.cookies.userId; //Almaceno el id de cookies

    db.Usuario.findByPk(idUsuario) //Busco el usuario usando ese id
    .then ((result) => {
      req.session.user = result; //Guardo el resultado en session y en locals 
      return next();
    }).catch((error) => {
      console.log(error);
    });
  }
    return next ()
  })

//Declaro los 3 prefijos, /indexrouter index router, requiero las rutas 
//app.use es un metodo que recibe 2 parametro: 1 nombre del recurso y 2
//nombre de la constante en la que almacenamos el modulo del recurso
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
