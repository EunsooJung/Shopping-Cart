'use strict';
module.exports = (sequelize, DataTypes) => {
  const CustomerAddress = sequelize.define('CustomerAddress', {
    customerId: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER
  }, {});
  CustomerAddress.associate = function(models) {
    // associations can be defined here
  };
  return CustomerAddress;
};