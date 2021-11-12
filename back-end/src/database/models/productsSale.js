const productsSaleSchema = require('../schemas/productsSale');
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
 module.exports = (sequelize, _DataTypes) => {
  const ProductsSale = sequelize.define('productsSale', { }, { timestamps: false });
  ProductsSale.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: 'products',
      through: ProductsSale,
      foreignKey: 'productId',
      otherKey: 'saleId'
    });
    models.sale.belongsToMany(models.product, {
      as: 'sales',
      through: ProductsSale,
      foreignKey: 'saleId',
      otherKey: 'productId'
    });
  };
  return ProductsSale;
};
