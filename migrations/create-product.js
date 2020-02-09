'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING
      },
      metaDescription: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      metaKeywords: {
        type: Sequelize.STRING
      },
      sku: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      oldPrice: {
        type: Sequelize.DECIMAL,
        allowNull: false,

      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isBestseller: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isFeatured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productStatus: {
        type: Sequelize.ENUM,
        values: ['active', 'inactive'],
        defaultValue: 'active'
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};