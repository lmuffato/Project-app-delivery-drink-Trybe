module.exports = (sequelize, _DataTypes) => {
  const SaleProduct = sequelize.define(
    'saleProduct',
    {},
    { timestamps: false, tableName: 'salesProducts' }
  );

  SaleProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.product.belongsToMany(models.sale, {
      as: 'posts',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };

  return SaleProduct;
};
