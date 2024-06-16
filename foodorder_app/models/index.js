const User = require('./user');
const Order = require('./order');
const Product = require('./product');
const Role = require('./role');
const OrderProduct = require('./OrderProducts');
const db = require('../config/db');

const setupDatabaseAssociations = async () => {
   Role.belongsToMany(User,{                        // many to many relationship
      through: 'user_roles',
        foreignKey: 'roleId',    
        otherKey: 'userId'       
   });
    User.belongsToMany(Role,{                      // many to many relationship
        through: 'user_roles',
          foreignKey: 'userId',
          otherKey: 'roleId'                      // user.setRole(role)
    });

    User.hasMany(Order,{as: 'orders', foreignKey: 'userId'});       // one to many relationship
    Order.belongsTo(User,{as: 'user', foreignKey: 'userId'});       // one to one relationship

    Order.belongsToMany(Product,{
        through: OrderProduct,
        foreignKey: 'orderId',
        otherKey: 'productId'
    });
    Product.belongsToMany(Order,{
        through: 'order_products',
        foreignKey: 'productId',
        otherKey: 'orderId'
    });

    await db.sync();

  // await db.sync({force:true}); // Use this to drop all tables and recreate them
  // await db.sync({alter:true}); // Use this to make changes to the tables
};

module.exports = {
    setupDatabaseAssociations,
    User,
    Order,
    Product,
    Role
}
