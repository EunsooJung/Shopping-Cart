'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
    productId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  ProductCategory.associate = function(models) {
    // associations can be defined here
  };
  return ProductCategory;
};