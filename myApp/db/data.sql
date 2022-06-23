CREATE SCHEMA db

USE db

CREATE TABLE  usuarios (

id                  INT              UNSIGNED   PRIMARY KEY  AUTO_INCREMENT, 
createdAt			DATE 		     NULL,
updatedAt           DATE 		     NULL,
nombre      		VARCHAR(50)      NOT NULL,
apellido    		VARCHAR(50)      NOT NULL,
email       		VARCHAR(50)      NOT NULL,
nombreUsuario       VARCHAR(50)      NOT NULL,
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
//RangeError: Maximum call stack size exceeded//

datos para usuario
INSERT INTO usuarios VALUES (default, default, default, 'Juan', 'Perez', 'juanperez@gmail.com', 'juanchoperez', 'root', '2020-05-09', 0, 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg');

INSERT INTO usuarios VALUES (default, default, default, 'Fede', 'Fernandez', 'fedefdez@gmail.com', 'fedoferno', 'root', '2002-05-09', 0, 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg');

INSERT INTO usuarios VALUES (default, default, default, 'Leo', 'Messi', 'leomessi@gmail.com', 'leomessi10', 'root', '1987-06-24', 0, 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg')

datos para productos
INSERT INTO productos VALUES (default, '2022-06-18', default, 'Chevrolet Onix', 'auto blanco moderno', 'https://imgcla.lavoz.com.ar/files/imagecache/ficha_aviso_mobile_462_253/avisos/aviso_auto/aviso-auto-chevrolet-onix-23058412-0302-48f4-b4bb-84c817f6346b-682.png', '1');

INSERT INTO productos VALUES (default, '2022-06-18', default, 'Chevrolet Onix', 'auto negro moderno', 'https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/2020-onix-premier/colorizer/01-images/julio-20/4-onix-premier-black-meet-kettle-met.png?imwidth=960', '1');

INSERT INTO productos VALUES (default, '2022-06-18', default, 'Chevrolet Onix', 'auto marron moderno', 'https://imgcla.lavoz.com.ar/files/imagecache/ficha_aviso_mobile_462_253/avisos/aviso_auto/aviso-auto--8572929.JPG	', '1');

INSERT INTO productos VALUES (default, '2022-06-18', default, 'Chevrolet Onix', 'auto rojo moderno', 'https://www.megautos.com/wp-content/uploads/2019/09/nuevo-chevrolet-onix-2020-rojo-h1.jpg', '2');

INSERT INTO productos VALUES (default, '2022-06-18', default, 'Chevrolet Onix', 'auto azul moderno', 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/l/RT_V_ec2a039ef81144019c35c9f6347dd121.jpg', '2')

datos para comentarios
INSERT INTO comentarios VALUES (default, default, 1, 1, 'muy recomendable');

INSERT INTO comentarios VALUES (default, default, 2, 1, 'muy bueno');

INSERT INTO comentarios VALUES (default, default, 2, 2, 'gran precio');

INSERT INTO comentarios VALUES (default, default, 3, 1, 'muy recomendable')     