module.exports = function (sequelize, dataTypes){

    let alias = 'Usuario'; //Sequelie utiliza este alias para identificar al modelo

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
            type: dataTypes.INTEGER
        },
        fotoPerfil: {
            type: dataTypes.STRING
        }


    }

    let config = {
        tableName : "usuarios",
        timestamps: true, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: false, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };
    
    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, { //1 usuario tiene muchos productos
            as: 'productos', //Alias con el que vamos a identificar a la relacion
            foreignKey: 'idUsuario' //Campo donde se encuentra la foreignKey que relaciona ambas tablas
        })
        Usuario.hasMany(models.Comentario, { //1 usuario tiene muchos comentarios
            as: 'comentarios',
            foreignKey: 'idUsuario'
        })
        Usuario.belongsToMany(models.Usuario, { //1 usuario puede tener muchos seguidores
            as: 'seguidor',
            through: 'seguidores',
            foreignKey: 'idSeguido',
            otherKey: 'idSeguidor',
            timestamps: false
        })
        Usuario.belongsToMany(models.Usuario, { //1 usuario puede seguir mucha gente
            as: 'seguido',
            through: 'seguidores',
            foreignKey: 'idSeguidor',
            otherKey: 'idSeguido',
            timestamps: false
        })
    }
    
    return Usuario; //Cerramos la funcion a exportar
} 