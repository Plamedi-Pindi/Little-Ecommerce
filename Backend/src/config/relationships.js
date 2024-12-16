const User = require('../models/User');
const Cliente = require('../models/Cliente');

const defineRelationShips = () => {
    /*====== User and Client =======*/
    User.hasOne(Cliente, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
    Cliente.belongsTo(User);
    /*=============================*/
    
}

module.exports = defineRelationShips;