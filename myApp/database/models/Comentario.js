module.exports = function (sequelize, dataTypes){

    let alias = 'Comment'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

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
        name: {
            type: dataTypes.STRING
        },
        nombreUsuario: {
            type: dataTypes.STRING
        },
        text: {
            type: dataTypes.STRING
        },
        contrasena: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName : "comments",
        timestamps:true, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

    const Comment = sequelize.define(alias, cols, config);

    return Comment;

} 