const SaleProduct = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define("SaleProduct", {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, { timestamps: false });

  SaleProduct.associate = ({ Sale }) => {
    SaleProduct.belongsTo(Sale, { foreignKey: 'sale_id', as: 'sale' });
  };

  SaleProduct.associate = ({ Product }) => {
    SaleProduct.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });
  };

  return SaleProduct;
};

module.exports = SaleProduct;
