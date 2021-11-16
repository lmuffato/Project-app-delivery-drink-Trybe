const productsSaleSchema = require('../schemas/productsSale');
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
 module.exports = (sequelize, DataTypes) => {
  const productsSale = sequelize.define('productsSale', productsSaleSchema(DataTypes), { timestamps: false });
  productsSale.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: 'products',
      through: productsSale,
      foreignKey: 'productId',
      otherKey: 'saleId'
    });
    models.sale.belongsToMany(models.product, {
      as: 'sales',
      through: productsSale,
      foreignKey: 'saleId',
      otherKey: 'productId'
    });
  };
  return productsSale;
};
