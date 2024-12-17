'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      CategoriaId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Categoria,
          key: 'id',
        },
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      color: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      data: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
  }
};
