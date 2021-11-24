module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', 
  {
    quantity: DataTypes.INTEGER,
  },
  { timestamps: false, tableName: 'salesProducts', underscored: true });

  SaleProduct.associate = ({ Sale, Product}) => {
    Product.belongsToMany(Sale, {
      through: SaleProduct, as: 'sales', foreignKey: 'productId', otherKey: 'saleId',
    });

    Sale.belongsToMany(Product, {
      through: SaleProduct, as: 'products', foreignKey: 'saleId', otherKey: 'productId',
    });
  };

  return SaleProduct;
}; 
