CREATE SCHEMA db

USE db

CREATE TABLE  usuarios (

id                  INT              UNSIGNED   PRIMARY KEY  AUTO_INCREMENT, 
createdAt			DATE 		     NULL,
updatedAt           DATE 		     NULL,
nombre      		VARCHAR(50)      NOT NULL,
apellido    		VARCHAR(50)      NOT NULL,
email       		VARCHAR(50)      NOT NULL   UNIQUE,
nombreUsuario       VARCHAR(50)      NOT NULL   UNIQUE,
contraseña       	VARCHAR(100)     NOT NULL,
fechaNacimiento     DATE      		 NOT NULL,
seguidores          INT, 
fotoPerfil          VARCHAR(360)
);

CREATE TABLE  comentarios (

id                 INT              UNSIGNED    PRIMARY KEY  AUTO_INCREMENT, 
createdAt		   DATE 		    NULL,
idUsuario		   INT				UNSIGNED	NOT NULL,
idProducto		   INT				UNSIGNED 	NOT NULL,
texto     	       TEXT				NOT NULL,

FOREIGN KEY (idUsuario) REFERENCES usuarios (id),
FOREIGN KEY (idProducto) REFERENCES productos (id)

);

CREATE TABLE  productos (

id                  INT              UNSIGNED      PRIMARY KEY     AUTO_INCREMENT, 
createdAt			DATE		     NULL,
updatedAt			DATE 		     NULL,
nombreProducto      VARCHAR(80)      NOT NULL,
descripcion     	TEXT    		 NOT NULL,
imagen              VARCHAR(360) 	 NOT NULL,
idUsuario			INT				 UNSIGNED	NOT NULL,	 

FOREIGN KEY (idUsuario) REFERENCES usuarios (id)
);

CREATE TABLE  seguidores (

id              INT     UNSIGNED    PRIMARY KEY  AUTO_INCREMENT, 
idSeguidor		INT     UNSIGNED	NOT NULL,
idSeguido		INT     UNSIGNED 	NOT NULL,

FOREIGN KEY (idSeguidor) REFERENCES usuarios (id),
FOREIGN KEY (idSeguido) REFERENCES usuarios (id)
);

///// DATOS PARA INSERTAR EN LAS TABLAS /////


DATOS USUARIOS
INSERT INTO usuarios (`id`,`createdAt`,`updatedAt`,`nombre`,`apellido`,`email`,`nombreUsuario`,`contraseña`,`fechaNacimiento`,`seguidores`,`fotoPerfil`) VALUES (1,NULL,'2022-06-21','Leopoldo','Messi  ','juanperez@gmail.com','LeopoldoM12','root','2020-05-09',0,'fotoPerfil-1655849217827.jpeg');
INSERT INTO usuarios (`id`,`createdAt`,`updatedAt`,`nombre`,`apellido`,`email`,`nombreUsuario`,`contraseña`,`fechaNacimiento`,`seguidores`,`fotoPerfil`) VALUES (2,NULL,'2022-06-21','Federico','Fernandez','fedefdez@gmail.com','fedoferno','root','2002-05-09',0,'fotoPerfil-1655848564896.jpeg');
INSERT INTO usuarios (`id`,`createdAt`,`updatedAt`,`nombre`,`apellido`,`email`,`nombreUsuario`,`contraseña`,`fechaNacimiento`,`seguidores`,`fotoPerfil`) VALUES (3,NULL,'2022-06-22','Leo','Messi','leomessi@gmail.com','leomessi10','root','1987-06-24',0,'fotoPerfil-1655924213784.jpeg');
INSERT INTO usuarios (`id`,`createdAt`,`updatedAt`,`nombre`,`apellido`,`email`,`nombreUsuario`,`contraseña`,`fechaNacimiento`,`seguidores`,`fotoPerfil`) VALUES (4,'2022-06-22','2022-06-22','Bruno','Gallo','','kunaguero','$2a$10$MBbYa5ilB0WjpyYMAu08qu7h5hyaASSGPjfAFrnR3fEsPdjEwzsSe','2022-06-01',NULL,'fotoPerfil-1655920346816.jpeg');
INSERT INTO usuarios (`id`,`createdAt`,`updatedAt`,`nombre`,`apellido`,`email`,`nombreUsuario`,`contraseña`,`fechaNacimiento`,`seguidores`,`fotoPerfil`) VALUES (5,'2022-06-22','2022-06-22','Bruno','Gallo','brunogiorgiogallo@gmail.com','Brunoggallo','$2a$10$lDeB1svwo4aQp2edkzd02e0Y0ygYlwAatLNcNuOl2NxFSk4GwYMFi','2022-06-08',NULL,'fotoPerfil-1655920399633.jpeg');
INSERT INTO usuarios (`id`,`createdAt`,`updatedAt`,`nombre`,`apellido`,`email`,`nombreUsuario`,`contraseña`,`fechaNacimiento`,`seguidores`,`fotoPerfil`) VALUES (6,'2022-06-22','2022-06-22','Bruno','Gallo','bgallo@gmail.com','bggallo','$2a$10$JPrHkAY6ICoA6kV2Vl6la.Be0e/YkBfRzkQulXiJyJsLW8mpwND5u','2022-06-21',NULL,'fotoPerfil-1655927164785.jpeg');
INSERT INTO usuarios (`id`,`createdAt`,`updatedAt`,`nombre`,`apellido`,`email`,`nombreUsuario`,`contraseña`,`fechaNacimiento`,`seguidores`,`fotoPerfil`) VALUES (7,'2022-06-22','2022-06-23','Franco','martinez','fmartinez@gmail.com','fmartinez07','$2a$10$3gFQ44887X4zAJ504vpJEOZOqaLnBdkv8oxIc4Lu0db1GIsxQGx4i','2022-05-05',NULL,'fotoPerfil-1655948009967.webp');
INSERT INTO usuarios (`id`,`createdAt`,`updatedAt`,`nombre`,`apellido`,`email`,`nombreUsuario`,`contraseña`,`fechaNacimiento`,`seguidores`,`fotoPerfil`) VALUES (8,'2022-06-23','2022-06-23','Wanchope','Abila','wanchoabila@gmail.com','wanchoabila9','$2a$10$KPcH4rcY8MlMbOTWyglWpe267xelKMfCh2XaNSMYAoTped9Kjr5zK','1993-01-05',NULL,'fotoPerfil-1655955625394.webp');
INSERT INTO usuarios (`id`,`createdAt`,`updatedAt`,`nombre`,`apellido`,`email`,`nombreUsuario`,`contraseña`,`fechaNacimiento`,`seguidores`,`fotoPerfil`) VALUES (9,'2022-06-23','2022-06-23','Juan Roman','Riquelme','juanroriquelme@gmail.com','juanrr10','$2a$10$JQ8Csnbw..m/WFwJlTikLOSsEoBft9FwyyAGVfIDCxxd3fj2MX2NG','2022-06-18',NULL,'fotoPerfil-1656021058911.jpeg');

DATOS PRODUCTOS
INSERT INTO productos (`id`,`createdAt`,`updatedAt`,`nombreProducto`,`descripcion`,`imagen`,`idUsuario`) VALUES (7,'2022-06-23','2022-06-23','Corsa','auto viejo blanco, clasico','imagen-1656019519658.jpg',7);
INSERT INTO productos (`id`,`createdAt`,`updatedAt`,`nombreProducto`,`descripcion`,`imagen`,`idUsuario`) VALUES (9,'2022-06-23','2022-06-23','Ferrari Enzo','Ferrari Enzo (no estoy para nada seguro que sea una enzo) moderno blanco','imagen-1655955847304.jpeg',8);
INSERT INTO productos (`id`,`createdAt`,`updatedAt`,`nombreProducto`,`descripcion`,`imagen`,`idUsuario`) VALUES (13,'2022-06-23','2022-06-23','Jeep Classic','Jeep clasica negra, 0km','imagen-1655956523537.webp',8);
INSERT INTO productos (`id`,`createdAt`,`updatedAt`,`nombreProducto`,`descripcion`,`imagen`,`idUsuario`) VALUES (15,'2022-06-23','2022-06-23','Lamborghini Murcielago','Lamborghini Murcielago (nuevamente, no se si estoy en lo correcto con el modelo), negro y moderno','imagen-1656020225134.jpeg',7);
INSERT INTO productos (`id`,`createdAt`,`updatedAt`,`nombreProducto`,`descripcion`,`imagen`,`idUsuario`) VALUES (16,'2022-06-23','2022-06-23','Dodge RAM','Dodge RAM roja, nueva y moderna','imagen-1656020241785.webp',7);

DATOS COMENTARIOS
INSERT INTO comentarios (`id`,`createdAt`,`idUsuario`,`idProducto`,`texto`) VALUES (5,NULL,7,9,'muy buen precio');
INSERT INTO comentarios (`id`,`createdAt`,`idUsuario`,`idProducto`,`texto`) VALUES (7,NULL,8,7,'Un clasico');
INSERT INTO comentarios (`id`,`createdAt`,`idUsuario`,`idProducto`,`texto`) VALUES (8,NULL,7,7,'Viste wancho, terrible');
INSERT INTO comentarios (`id`,`createdAt`,`idUsuario`,`idProducto`,`texto`) VALUES (9,NULL,7,13,'Que buena foto!');
INSERT INTO comentarios (`id`,`createdAt`,`idUsuario`,`idProducto`,`texto`) VALUES (11,NULL,8,15,'Increible!');
INSERT INTO comentarios (`id`,`createdAt`,`idUsuario`,`idProducto`,`texto`) VALUES (12,NULL,8,15,'Precio?');
INSERT INTO comentarios (`id`,`createdAt`,`idUsuario`,`idProducto`,`texto`) VALUES (13,NULL,8,16,'Que buena foto!');
INSERT INTO comentarios (`id`,`createdAt`,`idUsuario`,`idProducto`,`texto`) VALUES (14,NULL,9,9,'Tremendo');
