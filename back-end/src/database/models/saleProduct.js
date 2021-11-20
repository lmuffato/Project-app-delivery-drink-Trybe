'use strict';

module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('saleProduct', {
      quantity: DataTypes.INTEGER,
      saleId: { type: DataTypes.INTEGER, foreignKey: true },
      productId: { type: DataTypes.INTEGER, foreignKey: true },
    },
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
