const productSchema = require('../schemas/product')
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', productSchema(DataTypes), { timestamps: false });
  Product.associate = (models) => { };
  return Product;
};
