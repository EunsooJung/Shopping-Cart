'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductBrand = sequelize.define('ProductBrand', {
    productId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER
  }, {});
  ProductBrand.associate = function(models) {
    // associations can be defined here
  };
  return ProductBrand;
};