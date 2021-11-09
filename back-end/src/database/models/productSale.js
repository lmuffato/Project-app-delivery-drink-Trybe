module.exports = (sequelize, DataTypes) => {
  const ProductSale = sequelize.define('ProductSale', {
     saleId: DataTypes.INTEGER,
     productId: DataTypes.INTEGER,
     quantity: DataTypes.INTEGER,
    },
   { timestamps: false, tableName: 'productSales' }
  );
  ProductSale.associate = (models) => {
    models.Sales.belongsToMany(models.Product, {
      as: 'products',
      through: ProductSale,
      foreignKey: 'sale_Id',
      otherKey: 'product_Id',
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: ProductSale,
      foreignKey: 'product_Id',
      otherKey: 'sale_Id',
    });
  };
  return ProductSale;
};