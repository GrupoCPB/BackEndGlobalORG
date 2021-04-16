'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Voluntarios', {
      idVoluntario: {
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
      dataNascimento: {
        type: Sequelize.DATE
      },
      genero: {
        type: Sequelize.INTEGER,
      },
      sexualidade: {
        type: Sequelize.INTEGER
      },  
      portadorDeficiencia: {
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
      telefoneOutro: {
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
      UF: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      linkCV: {
        type: Sequelize.STRING
      },
      sobre: {
        type: Sequelize.TEXT
      },
      fotoCapa: {
        type: Sequelize.STRING
      },
      fotoRosto: {
        type: Sequelize.STRING
      },
      municipio: {
        type: Sequelize.STRING
      },
      UF: {
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