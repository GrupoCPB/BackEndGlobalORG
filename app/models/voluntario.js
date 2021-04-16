module.exports = (sequelize, DataTypes) => {
  const Voluntario = sequelize.define('Voluntario', {
    idVoluntario: DataTypes.INTEGER,
    apelido: DataTypes.STRING,
    cpf: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    genero: DataTypes.INTEGER,
    sexualidade: DataTypes.INTEGER,
    portadorDeficiencia: DataTypes.BOOLEAN,
    profissao: DataTypes.STRING,
    formacao: DataTypes.INTEGER,
    habilidades: DataTypes.TEXT,
    telefone: DataTypes.STRING,
    telefoneOutro: DataTypes.STRING,
    endereco: DataTypes.STRING,
    complemento: DataTypes.STRING, 
    municipio: DataTypes.STRING,
    UF: DataTypes.STRING,
    cep: DataTypes.STRING,
    linkCV: DataTypes.STRING,
    sobre: DataTypes.TEXT,
    fotoCapa: DataTypes.STRING,
    fotoRosto: DataTypes.STRING
  });

  Voluntario.associate = function(models) {
    // associations can be defined here
    Voluntario.belongsTo(models.Post, {
      foreignKey: 'idUsuario',
      as: 'usuario',
      onDelete: 'CASCADE',
    });

    Voluntario.hasMany(models.Post, {
      foreignKey: 'idVaga',
      as: 'vagas',
      onDelete: 'CASCADE',
    });
  };
  
  return Voluntario;
};




/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voluntario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  //  static associate(models) {
      // define association here
/*    }
  };
  Voluntario.init({
    idVoluntario: DataTypes.INTEGER,
    apelido: DataTypes.STRING,
    cpf: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    genero: DataTypes.INTEGER,
    sexualidade: DataTypes.INTEGER,
    portadorDeficiencia: DataTypes.BOOLEAN,
    profissao: DataTypes.STRING,
    formacao: DataTypes.INTEGER,
    habilidades: DataTypes.STRING,
    telefone: DataTypes.STRING,
    telefoneOutro: DataTypes.STRING,
    endereco: DataTypes.STRING,
    complemento: DataTypes.STRING, 
    municipio: DataTypes.STRING,
    UF: DataTypes.STRING,
    cep: DataTypes.STRING,
    linkCV: DataTypes.STRING,
    sobre: DataTypes.STRING,
    fotoCapa: DataTypes.STRING,
    fotoRosto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Voluntario',
  });
  return Voluntario;
};*/