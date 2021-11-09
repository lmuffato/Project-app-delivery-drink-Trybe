/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
 module.exports = (sequelize, _DataTypes) => {
  const ProductsSale = sequelize.define('ProductsSale', { }, { timestamps: false });
  ProductsSale.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'products',
      through: ProductsSale,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.Sale.belongsToMany(models.Product, {
      as: 'sales',
      through: ProductsSale,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };
  return ProductsSale;
};
