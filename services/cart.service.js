'use strict';
const uuidv4 = require('uuid/v4');
var db = require('../models/index.js');

var product = require('../models/product/product.js');
var cart = require('../models/cart/cart.js');
var cartItem = require('../models/cart/cartitem.js');

var cartModel = cart(db.sequelize, db.Sequelize.DataTypes);
var cartItemModel = cartItem(db.sequelize, db.Sequelize.DataTypes);
var productModel = product(db.sequelize, db.Sequelize.DataTypes);

//Associate The Models
cartModel.associate({ CartItem: cartItemModel });
cartItemModel.associate({ Cart: cartModel, Product: productModel });

/* Gets Unique Cart Id */
var uniqueCartId = function (request) {
  if (request.session.uniqueCartId) {
    return request.session.uniqueCartId;
  } else {
    request.session.uniqueCartId = generateUniqueId();
    return request.session.uniqueCartId;
  }
};

/* Generate Unique Id */
var generateUniqueId = function () {
  var uiid = uuidv4();
  return uiid;
};

/* Get Cart */
var getCart = function (request) {
  var uniqueId = uniqueCartId(request);
  var cart = cartModel.findOrCreate({ where: { uniqueCartId: uniqueId } });
  return cart;
};

/* Add To Cart */
var addToCart = function (request) {
  var productId = request.body.productId;
  getCart(request).then(cart => {
    cartItemModel.findOne({
      where: { productId: productId, cartId: cart[0].id }
    }).then(cartItem => {
      if (cartItem) {
        var qnt = cartItem.quantity + 1;
        cartItemModel.update({ quantity: qnt },
          {
            where: { productId: productId, cartId: cart[0].id }
          });
      } else {
        cartItemModel.create({
          quantity: 1,
          cartId: cart[0].id,
          productId: productId
        });
      }
    });
  });
};

/* Remove From Cart */
var removeFromCart = function (request) {
  var cartItemId = request.body.cartItemId;
  return cartItemModel.destroy({
    where: { id: cartItemId }
  });
};

/* Get Cart Items */
var getCartItems = function (request) {
  return getCart(request).then(cart => {
    return cartItemModel.findAll({
      where: { cartId: cart[0].id },
      include: [
        { model: productModel }
      ]
    }).then(cartItems => cartItems);
  });
};

/* Cart Items Count */
var cartItemsCount = function (cartItems) {
  var count = 0;
  if (cartItems.length) {
    cartItems.forEach(item => {
      count += item.quantity;
    });
  }
  return count;
};

/* Get Cart Total */
var getCartTotal = function (cartItems) {
  var total = 0;
  if (cartItems.length) {
    cartItems.forEach(item => {
      total += item.quantity * item.Product.price;
    });
  }
  return total;
};


/* Exports all methods */
module.exports = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
  getCartItems: getCartItems,
  cartItemsCount: cartItemsCount,
  getCartTotal: getCartTotal,
  getCart: getCart,
  uniqueCartId: uniqueCartId
};