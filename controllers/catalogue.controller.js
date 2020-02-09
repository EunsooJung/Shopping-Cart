'use strict';
var catalogueService = require('../services/catalogue.service.js');
var cartService = require('../services/cart.service.js');
var date = new Date();

/* Get all products */
var getPagedProducts = function (req, res) {
  if (req.method === 'POST') {
    cartService.addToCart(req);
    res.redirect(req.body.originalUrl);
  } else {
    fetchPaginatedProducts(req, res);
  }
};

/* Create a new product */
var createProduct = function (req, res) {
  if (req.method === 'POST') {
    res.redirect('/');
  } else {
    res.redirect('/');
  }
};

/* Get Product */
var getProduct = function (req, res) {
  res.redirect('/');
};

/* Update Product */
var editProduct = function (req, res) {
  if (req.method === 'POST') {
    res.redirect('/');
  } else {
    res.redirect('/');
  }
};

/* Delete Product */
var deleteProduct = function (req, res) {
  res.redirect('/');
};

var fetchPaginatedProducts = function (req, res) {

  var selectedCategory = req.params.category_slug ? req.params.category_slug : 'all-categories';
  var selectedBrand = req.params.brand_slug ? req.params.brand_slug : 'all-brands';

  catalogueService.fetchProducts(req, selectedCategory, selectedBrand).then(pageObject => {
    catalogueService.fetchCategories().then(categories => {
      catalogueService.fetchBrands().then(brands => {
        const itemCount = pageObject.count;
        const pageCount = Math.ceil(pageObject.count / req.query.limit);
        res.render(
          'catalogue',
          {
            title: 'Product List',
            year: date.getFullYear(),
            page_object: pageObject.rows,
            pageCount: pageCount,
            itemCount: itemCount,
            pages: res.locals.paginate.getArrayPages(5, pageCount, req.query.page),
            categories: categories,
            brands: brands,
            selected_category: selectedCategory,
            selected_brand: selectedBrand,
            originalUrl: req.originalUrl
          });
      });
    });
  });
};

/* Exports all methods */
module.exports = {
  getPagedProducts: getPagedProducts,
  createProduct: createProduct,
  getProduct: getProduct,
  editProduct: editProduct,
  deleteProduct: deleteProduct
};