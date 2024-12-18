const { DataTypes } = require('sequelize');
const db = require('../config/sequelize');

// Import Compra Model
const Compra = require('./Compra');

// Import Produto Model
const Produto = require('./Produto');


// Atributes objects
const attributes = {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    compraId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Compra,
            key: 'id',
        },
    },
    produtoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Produto,
            key: 'id',
        },
    },

};

// Defing timestamps
const timestamps = { timestamps: false}

// Models Definition
const ItemPedido = db.sequelize.define('ItemPedido', attributes, timestamps);

//Sync 
ItemPedido.sync();

// Model esportation
module.exports = ItemPedido;