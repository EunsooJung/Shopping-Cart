'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  OrderItem.associate = function(models) {
    OrderItem.belongsTo(models.Order);
    OrderItem.belongsTo(models.Product);
  };
  return OrderItem;
};