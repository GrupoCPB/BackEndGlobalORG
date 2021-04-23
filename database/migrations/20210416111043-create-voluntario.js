'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Voluntarios', {
      id_voluntario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      apelido: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      data_nascimento: {
        type: Sequelize.DATE
      },
      genero: {
        type: Sequelize.INTEGER,
      },
      sexualidade: {
        type: Sequelize.INTEGER
      },  
      portador_deficiencia: {
        type: Sequelize.BOOLEAN
      },
      profissao: {
        type: Sequelize.STRING
      },
      formacao: {
        type: Sequelize.INTEGER
      },
      habilidades: {
        type: Sequelize.TEXT
      },
      telefone: {
        type: Sequelize.STRING
      },
      telefone_outro: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      municipio: {
        type: Sequelize.STRING
      },
      uf: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      link_cv: {
        type: Sequelize.STRING
      },
      sobre: {
        type: Sequelize.TEXT
      },
      foto_capa: {
        type: Sequelize.STRING
      },
      foto_rosto: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Voluntarios');
  }
};