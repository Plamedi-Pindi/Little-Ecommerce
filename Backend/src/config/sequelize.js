const {Sequelize, DataTypes} = require('sequelize');
const config = require('./database');

const sequelize = new Sequelize(config.development);

sequelize.authenticate()
    .then(()=>{
        console.log('Database connected sucessfully!');
    })
    .catch(err => {
        console.log('Was not possible to connect to databses!' + err);
    });

const db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;