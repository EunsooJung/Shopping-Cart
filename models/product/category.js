'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING,
    metaDescription: DataTypes.STRING,
    metaKeywords: DataTypes.STRING,
    categoryStatus: { type: DataTypes.ENUM, values: ['active', 'inactive'] },
    isDeleted: DataTypes.BOOLEAN
  }, {});
  Category.associate = function(models) {
    Category.belongsToMany(models.Product, { through: models.ProductCategory });
  };
  return Category;
};