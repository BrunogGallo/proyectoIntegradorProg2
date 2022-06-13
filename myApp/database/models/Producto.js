module.exports = function (sequelize, dataTypes){

    let alias = 'Product'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        created_at : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        nombreProducto: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        fechaCarga: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName : "products",
        timestamps:true, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;

} 