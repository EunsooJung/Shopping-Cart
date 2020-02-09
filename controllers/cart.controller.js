'use strict';
var cartService = require('../services/cart.service.js');
var date = new Date();

/* Cart Detail */
var cartDetail = function (req, res) {
  if (req.method === 'POST') {
    cartService.removeFromCart(req).then(() => {
      cartService.getCartItems(req).then(items => {
        res.render(
          'cart_detail',
          {
            title: 'Cart Detail',
            year: date.getFullYear(),
            cartItems: items
          });
      });
    });
  } else {
    cartService.getCartItems(req).then(items => {
      res.render(
        'cart_detail',
        {
          title: 'Cart Detail',
          year: date.getFullYear(),
          cartItems: items
        });
    });
  }
};

/* Exports all methods */
module.exports = {
  cartDetail: cartDetail
};