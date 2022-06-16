module.exports = function (sequelize, dataTypes){

    let alias = 'Producto'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
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

    let config = {
        tableName : "productos",
        timestamps: true, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: false, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo (models.Usuario, {
            as: 'usuarios',
            foreignKey: 'idUsuario'
        })
    }

    return Producto; //Cierra la funcion que exportamos al principio del archivo.
    }


