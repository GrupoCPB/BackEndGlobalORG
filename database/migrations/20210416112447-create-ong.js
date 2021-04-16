'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ongs', {
      idOng: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      cnpj: {
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
      informacaoGeral: {
        type: Sequelize.STRING
      },
      resumo: {
        type: Sequelize.STRING
      },
      imagem: {
        type: Sequelize.STRING
      },
      quantidadeBeneficiados: {
        type: Sequelize.INTEGER
      },
      telefone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      site: {
        type: Sequelize.STRING
      },
      facebook: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
      },
      sobre: {
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
    await queryInterface.dropTable('Ongs');
  }
};