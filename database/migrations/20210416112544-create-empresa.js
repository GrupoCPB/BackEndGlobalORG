'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Empresas', {
      idEmpresa: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      razaoSocial: {
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
    await queryInterface.dropTable('Empresas');
  }
};