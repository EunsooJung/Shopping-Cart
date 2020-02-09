'use strict';
var catalogueRouter = require("./catalogue/catalogue.router.js");
var cartRouter = require("./cart/cart.router.js");
var checkoutRouter = require("./checkout/checkout.router.js");

var register = function (app) {
  app.use('/', catalogueRouter); 
  app.use('/cart', cartRouter);
  app.use('/checkout', checkoutRouter);
};

module.exports = register;