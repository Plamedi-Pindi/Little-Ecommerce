const { DataTypes } = require('sequelize');
const db = require('../config/sequelize');

// Import User Model
const User = require('./User');

// Attributes Object
const attributes = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,  
            key: 'id', 
        },
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    }
};

// Defing timestamps
const timestamps = { timestamps: false}

// Models Definition
const Contato = db.sequelize.define('Contato', attributes, timestamps);

//Sync 
Contato.sync();

// Model esportation
module.exports = Contato;