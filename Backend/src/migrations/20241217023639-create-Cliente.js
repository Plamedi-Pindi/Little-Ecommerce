'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clientes', {
      id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    ueseIid: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,  
            key: 'id', 
        },
    },      
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clientes');
  }
};
