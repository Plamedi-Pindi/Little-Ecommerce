'use strict';


/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contatos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      phone: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      }
    },
      {
        timestamps: false
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contatos');
  }
};
