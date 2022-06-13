module.exports = function (sequelize, dataTypes){

    let alias = 'Usuario'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.STRING
        },
  
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        nombreUsuario: {
            type: dataTypes.STRING
        },
        contraseña: {
            type: dataTypes.STRING
        },
        fechaNacimiento: {
            type: dataTypes.DATE
        },
        seguidores: {
            type: dataTypes.DATE
        },
        fotoPerfil: {
            type: dataTypes.STRING
        }


    }

    let config = {
        tableName : "usuario",
        timestamps:true, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;

} 