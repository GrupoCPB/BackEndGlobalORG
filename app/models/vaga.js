module.exports = (sequelize, DataTypes) => {
  const Vaga = sequelize.define('Vaga', {
    idVaga: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    dataCriacao: DataTypes.DATE,
    quantidadeVagas: DataTypes.INTEGER,
    dataFechamento: DataTypes.DATE
  });

  Vaga.associate = function(models) {
    Vaga.hasMany(models.Post, {
      foreignKey: 'idVaga',
      as: 'candidatos',
      onDelete: 'CASCADE',
    });

    Vaga.belongsTo(models.Post, {
      foreignKey: 'idOng',
      as: 'ong',
      onDelete: 'CASCADE',
    });

    Vaga.belongsTo(models.Post, {
      foreignKey: 'idEmpresa',
      as: 'empresa',
      onDelete: 'CASCADE',
    });
  };
  
  return Vaga;
};


/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vaga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  //  static associate(models) {
      // define association here
/*    }
  };
  Vaga.init({
    idVaga: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    dataCriacao: DataTypes.DATE,
    quantidadeVagas: DataTypes.INTEGER,
    dataFechamento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Vaga',
  });
  return Vaga;
};*/