module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id_usuario: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    data_criacao: DataTypes.DATE,
    tipo_usuario: DataTypes.INTEGER
  });

  Usuario.associate = function(models) {
    Usuario.belongsTo(models.Post, {
      foreignKey: 'id_ong',
      as: 'ong',
      onDelete: 'CASCADE',
    });

    Usuario.belongsTo(models.Post, {
      foreignKey: 'id_empresa',
      as: 'empresa',
      onDelete: 'CASCADE',
    });
  };

  return Usuario;
};


/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
 //   static associate(models) {
      // define association here
/*    }
  };
  Usuario.init({
    idUsuario: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    dataCriacao: DataTypes.DATE,
    tipoUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};*/