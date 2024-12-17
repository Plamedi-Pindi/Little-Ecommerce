const { DataTypes } = require('sequelize');
const db = require('../config/sequelize');

// Import User Model
const User = require('./User');

// Atributes objects
const attributes = {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    ueseIid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,  
            key: 'id', 
        },
    },
};

// Model definition
const Cliente = db.sequelize.define('Cliente', attributes);

// Sync with database
Cliente.sync();

// Model exportation
module.exports = Cliente;