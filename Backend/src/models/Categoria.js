const {DataTypes} = require('sequelize');
const db = require('../config/sequelize');

// Attributes Object
const attributes = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }, 
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}

// Defing timestamps
const timestamps = { timestamps: false}

// Models Definition
const Categoria = db.sequelize.define('Categoria', attributes, timestamps);

//Sync 
Categoria.sync();

// Model esportation
module.exports = Categoria;
