'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    uniqueCartId: DataTypes.STRING,
    cartStatus: { type: DataTypes.ENUM, values: ['Open', 'CheckedOut'] }
  }, {});
  Cart.associate = function(models) {
    Cart.hasMany(models.CartItem);
  };
  return Cart;
};