'use strict';

var db = require('../models/index.js');

var brand = require('../models/product/brand.js');
var category = require('../models/product/category.js');
var product = require('../models/product/product.js');
var productBrand = require('../models/product/productbrand.js');
var productCategory = require('../models/product/productcategory.js');

var brandModel = brand(db.sequelize, db.Sequelize.DataTypes);
var categoryModel = category(db.sequelize, db.Sequelize.DataTypes);
var productModel = product(db.sequelize, db.Sequelize.DataTypes);
var productBrandModel = productBrand(db.sequelize, db.Sequelize.DataTypes);
var productCategoryModel = productCategory(db.sequelize, db.Sequelize.DataTypes);

brandModel.associate({ Product: productModel, ProductBrand: productBrandModel });
categoryModel.associate({ Product: productModel, ProductCategory: productCategoryModel });
productModel.associate({ Brand: brandModel, Category: categoryModel, ProductBrand: productBrandModel, ProductCategory: productCategoryModel });

/* Fetch Products */
var fetchProducts = function (request, category_slug, brand_slug) {
  let pageObject = null;

  if (category_slug === 'all-categories' && brand_slug === 'all-brands') {
    pageObject = productModel.findAndCountAll({
      limit: request.query.limit,
      offset: request.skip,
      where: { isDeleted: false }
    });
  }

  if (category_slug !== 'all-categories' && brand_slug !== 'all-brands') {
    pageObject = productModel.findAndCountAll({
      limit: request.query.limit,
      offset: request.skip,
      where: { isDeleted: false },
      include: [
        { model: brandModel, where: { slug: brand_slug } },
        { model: categoryModel, where: { slug: category_slug } }
      ]
    });
  }

  if (category_slug !== 'all-categories' && brand_slug === 'all-brands') {
    pageObject = productModel.findAndCountAll({
      limit: request.query.limit,
      offset: request.skip,
      where: { isDeleted: false },
      include: [
        { model: categoryModel, where: { slug: category_slug } }
      ]
    });
  }

  if (category_slug === 'all-categories' && brand_slug !== 'all-brands') {
    pageObject = productModel.findAndCountAll({
      limit: request.query.limit,
      offset: request.skip,
      where: { isDeleted: false },
      include: [
        { model: brandModel, where: { slug: brand_slug } }
      ]
    });
  }

  return pageObject;
};

/* Fetch Categories */
var fetchCategories = function () {
  let categories = categoryModel.findAll({ where: { isDeleted: false } });

  return categories;
};

/* Fetch Brands */
var fetchBrands = function () {
  let brands = brandModel.findAll({ where: { isDeleted: false } });
  return brands;
};


/* Exports all methods */
module.exports = {
  fetchProducts: fetchProducts,
  fetchCategories: fetchCategories,
  fetchBrands: fetchBrands
};