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
const Pedido = db.sequelize.define('Pedido', attributes);

//Sync 
Pedido.sync();

// Model esportation
module.exports = Pedido;