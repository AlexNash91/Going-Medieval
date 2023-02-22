'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Players', 'training');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Players', 'training', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  }
};
