'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      clienteId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Cliente,
          key: 'id',
        },
      },
      data: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
      },
      hora: {
        type: Sequelize.DataTypes.TIME,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pedidos');
  }
};
