'use strict';

 
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('itemCompras', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      compraId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'compras',
          key: 'id',
        },
      },
      produtoId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'produtos',
          key: 'id',
        },
      },
    },
      {
        timestamps: false
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('itemCompras');
  }
};
