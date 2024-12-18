'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('compras', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      clienteId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'clientes',
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
    },
  {
    timestamps: false
  });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('compras');
  }
};
