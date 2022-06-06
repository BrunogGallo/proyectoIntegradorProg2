CREATE SCHEMA localHost

CREATE TABLE  usuario (
/*Nombre  columna   tipoDato  Restricciones*/
id INT UNSIGNED PRIMARY KEY  AUTO_INCREMENT, 
/*lA COMA ES PARA NA SEGUNDA COLUMNA, AQUI SEGUNDA COLUMNA*/
nombre      VARCHAR(50)        NOT NULL,
apellido    VARCHAR(50)      NOT NULL,
email       VARCHAR(50)      NOT NULL,
nombreUsuario     VARCHAR(50)      NOT NULL,
contraseña       VARCHAR(50)      NOT NULL,
fechaNacimiento       DATE      NOT NULL,
nroDocumento      INT      NOT NULL,
/*aQUI EN FOTO PONEMRO VARCHAR POR Q SE GUARDA COMO STRING*/
fotoPerfil          VARCHAR(360)
);

CREATE TABLE  comentarios (

id INT UNSIGNED PRIMARY KEY  AUTO_INCREMENT, 

nombreUsuario      VARCHAR(50)        NOT NULL,
text     VARCHAR(500)      NOT NULL,
contraseña       VARCHAR(50)      NOT NULL,
imagen          VARCHAR(360)
);

CREATE TABLE  productos (

id INT UNSIGNED PRIMARY KEY  AUTO_INCREMENT, 

nombreProducto     	VARCHAR(50)     NOT NULL,
descripcion    	    VARCHAR(500)    NOT NULL,
fechaCarga          DATE      		NOT NULL,
imagen              VARCHAR(360)    NOT NULL
);
