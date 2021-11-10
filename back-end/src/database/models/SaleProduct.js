const SaleProduct = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    quantity: DataTypes.INTEGER,
  },
  { timestamps: false, tableName: 'sales_products' });
  
  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'Product',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'Sale',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };
  
  return SaleProduct;
  };
  
  module.exports = SaleProduct; 
