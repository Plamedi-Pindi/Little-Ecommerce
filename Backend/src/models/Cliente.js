const { DataTypes } = require('sequelize');
const db = require('../config/sequelize');

const User = require('./User')

const attributes = {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    ueseIid: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: User,  
            key: 'id', 
        },
    },
}

// Model definition
const Cliente = db.sequelize.define('Cliente', attributes);

// Sync with database
Cliente.sync();

// Model exportation
module.exports = Cliente;