const { DataTypes } = require('sequelize');
const db = require('../config/sequelize');

// Import Cliente Model
const Cliente = require('./Cliente');

// Atributes objects
const attributes = {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    clienteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cliente,  
            key: 'id', 
        },
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    
};


// Models Definition
const Compra = db.sequelize.define('Compra', attributes);

//Sync 
Compra.sync();

// Model esportation
module.exports = Compra;