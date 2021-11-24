const productsSaleSchema = require('../schemas/productsSale');
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
 module.exports = (sequelize, DataTypes) => {
  const productsSale = sequelize.define('salesProduct', productsSaleSchema(DataTypes), { timestamps: false });
  productsSale.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      through: productsSale,
      foreignKey: 'productId',
      otherKey: 'saleId'
    });
    models.sale.belongsToMany(models.product, {
      through: productsSale,
      foreignKey: 'saleId',
      otherKey: 'productId'
    });
  };
  return productsSale;
};
