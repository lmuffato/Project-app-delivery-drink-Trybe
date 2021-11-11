'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
  price: DataTypes.STRING,
  urlimage: DataTypes.STRING,
}, { timestamps: false });
  Product.associate = (models) => {
    Product.hasMany(models.SalesProduct, { foreignKey: 'product_id' });
  };
  return Product;
};