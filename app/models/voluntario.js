module.exports = (sequelize, DataTypes) => {
  const Voluntario = sequelize.define('Voluntario', {
    id_voluntario: DataTypes.INTEGER,
    apelido: DataTypes.STRING,
    cpf: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    genero: DataTypes.INTEGER,
    sexualidade: DataTypes.INTEGER,
    portador_deficiencia: DataTypes.BOOLEAN,
    profissao: DataTypes.STRING,
    formacao: DataTypes.INTEGER,
    habilidades: DataTypes.TEXT,
    telefone: DataTypes.STRING,
    telefone_outro: DataTypes.STRING,
    endereco: DataTypes.STRING,
    complemento: DataTypes.STRING, 
    municipio: DataTypes.STRING,
    uf: DataTypes.STRING,
    cep: DataTypes.STRING,
    link_cv: DataTypes.STRING,
    sobre: DataTypes.TEXT,
    foto_capa: DataTypes.STRING,
    foto_rosto: DataTypes.STRING
  });

  Voluntario.associate = function(models) {
    // associations can be defined here
    Voluntario.belongsTo(models.Post, {
      foreignKey: 'id_usuario',
      as: 'usuario',
      onDelete: 'CASCADE',
    });

    Voluntario.hasMany(models.Post, {
      foreignKey: 'id_vaga',
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