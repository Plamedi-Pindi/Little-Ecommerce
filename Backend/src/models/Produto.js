const { DataTypes } = require('sequelize');
const db = require('../config/sequelize');

// Import Categoria Model
const Categoria = require('./Categoria');

// Attributes Object
const attributes = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    CategoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categoria,  
            key: 'id', 
        },
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
    
};

// Models Definition
const Produto = db.sequelize.define('Produto', attributes);

//Sync 
Produto.sync();

// Model esportation
module.exports = Produto;
