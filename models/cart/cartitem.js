'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define('CartItem', {
    quantity: DataTypes.INTEGER,
    cartId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  CartItem.associate = function(models) {
    CartItem.belongsTo(models.Cart);
    CartItem.belongsTo(models.Product);
  };
  return CartItem;
};