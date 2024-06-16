const db = require('../config/db');
const {DataTypes} = require('sequelize');

const OrderProduct = db.define('order_products', {
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

module.exports = OrderProduct;