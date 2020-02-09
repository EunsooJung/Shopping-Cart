'use strict';
var checkoutForm = require('../forms/checkout/checkout.form.js');
var checkoutService = require('../services/checkout.service.js');

var date = new Date();

/* Checkout */
var checkout = function (req, res) {
  if (req.method === 'POST') {
    checkoutService.processCheckout(req);
    res.redirect('/checkout/receipt');
  } else {
    res.render('checkout', {
      title: 'Checkout Page',
      year: date.getFullYear(),
      form: checkoutForm
    });
  }
};

/* Receipt */
var receipt = function (req, res) {
  res.render(
    'receipt',
    {
      title: 'Receipt Page',
      year: date.getFullYear()
    });
};

/* Exports all methods */
module.exports = {
  checkout: checkout,
  receipt: receipt
};