'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderTotal: {
        type: Sequelize.DECIMAL
      },
      orderItemTotal: {
        type: Sequelize.DECIMAL
      },
      shippingCharge: {
        type: Sequelize.DECIMAL
      },
      deliveryAddressId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Addresses',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Customers',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      orderStatus: {
        type: Sequelize.ENUM,
        values: ['Canceled', 'Submitted', 'Completed', 'Processing'],
        defaultValue: 'Submitted'
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
    return queryInterface.dropTable('Orders');
  }
};