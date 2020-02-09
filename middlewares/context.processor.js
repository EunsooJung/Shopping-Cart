'use strict';
var cartService = require('../services/cart.service.js');

var localContext = function (req, res, next) {
  cartService.getCartItems(req).then(items => {
    res.locals.cartItemCount = cartService.cartItemsCount(items);
    res.locals.cartTotal = cartService.getCartTotal(items);
    next();
  });
};


/* Exports method */
module.exports = {
  localContext: localContext
};