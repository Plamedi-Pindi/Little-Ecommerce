const { DataTypes } = require('sequelize');
const db = require('../config/sequelize'); // Database config importation

// Model attributes object
const attributes = {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    fristName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
}

// Defing timestamps
const timestamps = { timestamps: false}

// Model definition
const User = db.sequelize.define('User', attributes, timestamps);

// Sync with database
User.sync();

// Model exportation
module.exports = User;