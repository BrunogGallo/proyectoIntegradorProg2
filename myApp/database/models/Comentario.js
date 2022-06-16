module.exports = function (sequelize, dataTypes){

    let alias = 'Comentario'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

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
        idUsuario: {
            type: dataTypes.INTEGER
        },
        idProducto: {
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.STRING
        },
       

    }

    let config = {
        tableName : "comentarios",
        timestamps: true, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: false, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function (models) {
        Comentario.belongsTo (models.Usuario, {
            as: 'usuarios',
            foreignKey: 'idUsuario'
        })
        Comentario.belongsTo (models.Producto, {
            as: 'productos',
            foreignKey: 'idProducto'
        })
        
    }
    return Comentario;

} 