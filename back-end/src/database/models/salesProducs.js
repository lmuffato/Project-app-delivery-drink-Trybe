const salesProducts = (sequelize, DataTypes) => {
  const salesProductsSchema = {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  };

  const salesProducts = sequelize.define('salesProducts', salesProductsSchema, 
    { timestamps: false }
  );

  salesProducts.associate = (models) => {
    models.sale.belongsToMany(models.product,{
      as: "productId",
      through: salesProducts,
      foreignKey: "sale_id",
      otherKey: "product_id",
    });
    models.product.belongsToMany(models.sale,{
      as: "saleId",
      through: salesProducts,
      foreignKey: "product_id",
      otherKey: "sale_id",
    });
  };

  return salesProducts;
}

module.exports = salesProducts;
