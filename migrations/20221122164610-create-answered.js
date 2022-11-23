'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('answereds', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      question_id: {
        type: Sequelize.UUID
      },
      user_id: {
        type: Sequelize.UUID
      },
      user_answer: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('answereds');
  }
};