const productSchema = require('../schemas/product')
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', productSchema(DataTypes), { timestamps: false });
  product.associate = (models) => { };
  return product;
};
