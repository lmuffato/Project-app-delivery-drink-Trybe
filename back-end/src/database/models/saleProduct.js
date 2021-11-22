'use strict';

module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('saleProduct', {
      quantity: DataTypes.INTEGER,
      sale_id: { type: DataTypes.INTEGER, foreignKey: true },
      product_id: { type: DataTypes.INTEGER, foreignKey: true },
    },
    { timestamps: false, tableName: 'salesProducts' }
  );

  SaleProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.product.belongsToMany(models.sale, {
      as: 'posts',
      through: SaleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return SaleProduct;
};
