CREATE SCHEMA localHost

CREATE TABLE  usuario (
/*Nombre  columna   tipoDato  Restricciones*/
id INT UNSIGNED PRIMARY KEY  AUTO_INCREMENT, 
/*LA COMA ES PARA LA SEGUNDA COLUMNA, AQUI SEGUNDA COLUMNA*/
nombre            VARCHAR(50)      NOT NULL,
apellido          VARCHAR(50)      NOT NULL,
email             VARCHAR(50)      NOT NULL,
nombreUsuario     VARCHAR(50)      NOT NULL,
contraseña        VARCHAR(50)      NOT NULL,
fechaNacimiento   DATE             NOT NULL,
nroDocumento      INT              NOT NULL,
/*AQUI EN FOTO PONEMOS VARCHAR POR QUE SE GUARDA COMO STRING*/
fotoPerfil        VARCHAR(360)
);

CREATE TABLE  comentarios (

id INT UNSIGNED PRIMARY KEY  AUTO_INCREMENT, 

nombreUsuario      VARCHAR(50)       NOT NULL,
text               VARCHAR(500)      NOT NULL,
contraseña         VARCHAR(50)       NOT NULL,
imagen             VARCHAR(360)
);

CREATE TABLE  productos (

id INT UNSIGNED PRIMARY KEY  AUTO_INCREMENT, 

nombreProducto     	VARCHAR(50)     NOT NULL,
descripcion    	    VARCHAR(500)    NOT NULL,
fechaCarga          DATE      		NOT NULL,
imagen              VARCHAR(360)    NOT NULL
);




//Tablas bruno
CREATE TABLE  usuario (

id INT UNSIGNED PRIMARY KEY  AUTO_INCREMENT, 
createdAt			DATE			 NOT NULL,
nombre      		VARCHAR(50)      NOT NULL,
apellido    		VARCHAR(50)      NOT NULL,
email       		VARCHAR(50)      NOT NULL,
nombreUsuario       VARCHAR(50)      NOT NULL,
contraseña       	VARCHAR(50)      NOT NULL,
fechaNacimiento     DATE      		 NOT NULL,
nroDocumento      	INT      		 NOT NULL,
fotoPerfil          VARCHAR(360)		
);

CREATE TABLE  comentarios (

id INT UNSIGNED PRIMARY KEY  AUTO_INCREMENT, 
createdAt		   DATE				NOT NULL,
idUsuario		   INT				NOT NULL,
nombreUsuario      VARCHAR(50)      NOT NULL,
texto     	       TEXT				NOT NULL,
contraseña         VARCHAR(50)      NOT NULL,
imagen             VARCHAR(360),

FOREIGN KEY (idUsuario) REFERENCES usuario (id)
);

CREATE TABLE  productos (

id INT UNSIGNED PRIMARY KEY  AUTO_INCREMENT, 
createdAt			DATE			 NOT NULL,
updatedAt			DATE 		     NOT NULL,
nombreProducto      VARCHAR(50)      NOT NULL,
descripcion     	TEXT    		 NOT NULL,
fechaCarga          DATE		     NOT NULL,
imagen              VARCHAR(360) 	 NOT NULL,
comentarios			TEXT,	 

FOREIGN KEY (comentarios) REFERENCES comentarios (id)
);

CREATE TABLE  seguidores (

id INT UNSIGNED PRIMARY KEY  AUTO_INCREMENT, 
idSeguidor		INT			NOT NULL,
idSeguido		INT 		NOT NULL,

FOREIGN KEY (idSeguidor) REFERENCES usuario (id),
FOREIGN KEY (idSeguido) REFERENCES usuario (id)
);