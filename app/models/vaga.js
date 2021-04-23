module.exports = (sequelize, DataTypes) => {
  const Vaga = sequelize.define('Vaga', {
    id_vaga: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    data_criacao: DataTypes.DATE,
    quantidade_vagas: DataTypes.INTEGER,
    data_fechamento: DataTypes.DATE
  });

  Vaga.associate = function(models) {
    Vaga.hasMany(models.Post, {
      foreignKey: 'id_vaga',
      as: 'candidatos',
      onDelete: 'CASCADE',
    });

    Vaga.belongsTo(models.Post, {
      foreignKey: 'id_ong',
      as: 'ong',
      onDelete: 'CASCADE',
    });

    Vaga.belongsTo(models.Post, {
      foreignKey: 'id_empresa',
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