const User = require('./user');
const Order = require('./order');
const Product = require('./product');
const Role = require('./role');
const db = require('../config/db');

const setupDatabaseAssociations = async () => {
   Role.belongsToMany(User,{
      through: 'user_roles',
        foreignKey: 'roleId',    
        otherKey: 'userId'       
   });
    User.belongsToMany(Role,{
        through: 'user_roles',
          foreignKey: 'userId',
          otherKey: 'roleId'
    });

    User.hasMany(Order,{as: 'orders', foreignKey: 'userId'});
    Order.belongsTo(User,{as: 'user', foreignKey: 'userId'});

    Order.belongsToMany(Product,{
        through: 'order_products',
        foreignKey: 'orderId',
        otherKey: 'productId'
    });
    Product.belongsToMany(Order,{
        through: 'order_products',
        foreignKey: 'productId',
        otherKey: 'orderId'
    });
  await db.sync();
};

module.exports = {
    setupDatabaseAssociations,
    User,
    Order,
    Product,
    Role
}
