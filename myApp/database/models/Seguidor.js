module.exports = function (sequelize, dataTypes){

    let alias = 'Seguidor'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idSeguidor: {
            type: dataTypes.INTEGER
        },
        idSeguido: {
            type: dataTypes.INTEGER
        },
        
    }

    let config = {
        tableName : "seguidores",
        timestamps: true, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: false, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

    const Seguidor = sequelize.define(alias, cols, config);

    return Seguidor;

} 