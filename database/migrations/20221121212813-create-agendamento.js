'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Agendamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsuario: {
        type: Sequelize.INTEGER
      },
      nomeCliente: {
        type: Sequelize.STRING
      },
      telefoneCliente: {
        type: Sequelize.STRING
      },
      dataAgendada: {
        type: Sequelize.DATE
      },
      horarioAgendado: {
        type: Sequelize.DATE
      },
      observacao: {
        type: Sequelize.TEXT
      },
      ativo: {
        type: Sequelize.BOOLEAN
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Agendamentos');
  }
};