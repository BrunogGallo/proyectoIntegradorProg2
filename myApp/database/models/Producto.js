module.exports = function (sequelize, dataTypes){

    let alias = 'Producto'; //Identifica al modelo

    let cols = { //Confiugracion de las columnas de nuestras base de datos
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true
        },
        nombreProducto: {
            type: dataTypes.STRING  
        },
        descripcion: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        },
        idUsuario: {
            type: dataTypes.INTEGER
        },
       

    }

    let config = { //Conifugraciones adicionales
        tableName : "productos",
        timestamps: true, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: false, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) { //funcion anonima
        Producto.belongsTo (models.Usuario, { //1 producto pertenece a un usuario
            as: 'usuario',
            foreignKey: 'idUsuario'
        })
        Producto.hasMany (models.Comentario, { //1 producto puede tener muchos comentarios
            as: 'comentarios',
            foreignKey: 'idProducto'
        })
    }

    return Producto; //Cierra la funcion 
    }


