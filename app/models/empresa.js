module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define('Empresa', {
    id_empresa: DataTypes.INTEGER,
    razao_social: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    endereco: DataTypes.STRING,
    complemento: DataTypes.STRING,
    municipio: DataTypes.STRING,
    uf: DataTypes.STRING,
    cep: DataTypes.STRING
  });

  Empresa.associate = function(models) {
    Empresa.hasMany(models.Post, {
      foreignKey: 'id_empresa',
      as: 'usuarios',
      onDelete: 'CASCADE',
    });

    Empresa.hasMany(models.Post, {
      foreignKey: 'id_empresa',
      as: 'vagas',
      onDelete: 'CASCADE',
    });
  };

  return Empresa;
};


/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  //  static associate(models) {
      // define association here
/*    }
  };
  Empresa.init({
    idEmpresa: DataTypes.INTEGER,
    razaoSocial: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    endereco: DataTypes.STRING,
    complemento: DataTypes.STRING,
    municipio: DataTypes.STRING,
    UF: DataTypes.STRING,
    cep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Empresa',
  });
  return Empresa;
};*/