module.exports = (sequelize, DataTypes) => {
  const Ong = sequelize.define('Ong', {
    idOng: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    endereco: DataTypes.STRING,
    complemento: DataTypes.STRING,
    municipio: DataTypes.STRING,
    UF: DataTypes.STRING,
    cep: DataTypes.STRING,
    informacaoGeral: DataTypes.TEXT,
    resumo: DataTypes.TEXT,
    imagem: DataTypes.STRING,
    quantidadeBeneficiados: DataTypes.INTEGER,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    site: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    sobre: DataTypes.TEXT
  });

  Ong.associate = function(models) {
    Ong.hasMany(models.Post, {
      foreignKey: 'idOng',
      as: 'usuarios',
      onDelete: 'CASCADE',
    });

    Ong.hasMany(models.Post, {
      foreignKey: 'idOng',
      as: 'causas',
      onDelete: 'CASCADE',
    });

    Ong.hasMany(models.Post, {
      foreignKey: 'idOng',
      as: 'vagas',
      onDelete: 'CASCADE',
    });
  };

  return Ong;
};


/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
 //   static associate(models) {
      // define association here
/*    }
  };
  Ong.init({
    idOng: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    endereco: DataTypes.STRING,
    complemento: DataTypes.STRING,
    municipio: DataTypes.STRING,
    UF: DataTypes.STRING,
    cep: DataTypes.STRING,
    informacaoGeral: DataTypes.STRING,
    resumo: DataTypes.STRING,
    imagem: DataTypes.STRING,
    quantidadeBeneficiados: DataTypes.INTEGER,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    site: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    sobre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ong',
  });
  return Ong;
};*/