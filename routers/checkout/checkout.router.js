'use strict';
var checkoutController = require('../../controllers/checkout.controller.js');
var express = require('express');
var router = express.Router();

/* Checkout Route */
router.all('/', checkoutController.checkout);

router.all('/receipt', checkoutController.receipt);


module.exports = router;