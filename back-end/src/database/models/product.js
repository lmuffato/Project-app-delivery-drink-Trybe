const productSchema = require('../schemas/product')
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
 module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
      id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
      name: DataTypes.STRING,
    }, { timestamps: false });
Product.associate = (models) => { };
return Product;
};
