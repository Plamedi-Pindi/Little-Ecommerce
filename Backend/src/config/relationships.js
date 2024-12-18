// Import Models
const User = require('../models/User');
const Cliente = require('../models/Cliente');
const Produto = require('../models/Produto');
const Categoria = require('../models/Categoria');
const Pedido = require('../models/Pedido');
const Compra = require('../models/Compra');
const ItemPedido = require('../models/ItemPedido');
const ItemConpra = require('../models/ItemCompra');
const Contato = require('../models/Contanto');


// Associetion function
const defineRelationShips = () => {

    /*====== User and Client =============*/
    User.hasOne(Cliente, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
    Cliente.belongsTo(User);
    /*====================================*/


    /*====== Produto and Categoria =======*/
    Categoria.hasMany(Produto, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
    Produto.belongsTo(Categoria);
    /*====================================*/


    /*====== Cliente and Pedido ==========*/
    Cliente.hasMany(Pedido, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    });
    Pedido.belongsTo(Cliente);
    /*====================================*/


    /*====== Cliente and Compra ==========*/
    Cliente.hasMany(Compra, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    });
    Compra.belongsTo(Cliente);
    /*====================================*/


    /*====== ItemPedido and Pedido ==========*/
    Pedido.hasMany(ItemPedido, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    });
    ItemPedido.belongsTo(Pedido);
    /*=======================================*/


    /*====== ItemConpra and Compra ==========*/
    Compra.hasMany(ItemConpra, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    });
    ItemConpra.belongsTo(Compra);
    /*=======================================*/


    /*====== User and Contato ==========*/
    User.hasMany(Contato, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
    Contato.belongsTo(User);
    /*=======================================*/



}

// Exporting function
module.exports = defineRelationShips;