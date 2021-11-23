module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct',{
    productId: {type: DataTypes.INTEGER, field: 'product_id'},
    saleId: {type: DataTypes.INTEGER, field: 'sale_id'},
    quantity: {type: DataTypes.INTEGER, field: 'quantity'},
  },{ timestamps: false, tableName: 'SalesProducts'});
  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return SaleProduct;
};
