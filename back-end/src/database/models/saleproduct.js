module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define(
    "SaleProduct",
    {
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'salesProducts'
    }
  );

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: "product",
      foreignKey: "saleId",
      otherKey: "productId",
      through: SaleProduct,
    });

    models.Product.belongsToMany(models.Sale, {
      as: "sale",
      foreignKey: "productId",
      otherKey: "saleId",
      through: SaleProduct,
    });
  };

  return SaleProduct;
};
