module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "products",
    }
  );

  Product.associate = (models) => {
    Product.hasMany(models.SaleProduct, {
      foreignKey: "productId",
      as: "SalesProducts",
    });
  };

  return Product;
};
