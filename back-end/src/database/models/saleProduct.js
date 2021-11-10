module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct',
    {
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'salesProducts',
    },
  );

  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: '',
      otherKey: '',
    });
  };

  return SaleProduct;
};
