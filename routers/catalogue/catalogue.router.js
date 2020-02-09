'use strict';
var catalogueController = require('../../controllers/catalogue.controller.js');
var express = require('express');
var router = express.Router();


/* Get Paged Product */
router.all('/', catalogueController.getPagedProducts);
router.get('/catalogue/:category_slug/:brand_slug', catalogueController.getPagedProducts);

/* Create New Product */
router.all('/new-product', catalogueController.createProduct);

/* Get Product Detail */
router.get('/product/:id/detail', catalogueController.getProduct);

/* Edit Product. */
router.all('/product/:id/edit', catalogueController.editProduct);

/* Delete Product. */
router.all('/product/:id/delete', catalogueController.deleteProduct);


module.exports = router;