'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    name: DataTypes.STRING,
    addressLine1: DataTypes.STRING,
    addressLine2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    addressType: { type: DataTypes.ENUM, values: ['Delivery', 'Billing', 'Unknown'] },
    isDeleted: DataTypes.BOOLEAN
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};