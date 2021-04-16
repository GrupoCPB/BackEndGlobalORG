'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vagas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idVaga: {
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      dataCriacao: {
        type: Sequelize.DATE
      },
      quantidadeVagas: {
        type: Sequelize.INTEGER
      },
      dataFechamento: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Vagas');
  }
};