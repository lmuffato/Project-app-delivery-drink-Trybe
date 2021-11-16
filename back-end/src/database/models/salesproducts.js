const saleProduct = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define("saleProduct", {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, { timestamps: false });

  saleProduct.associate = ({ sale }) => {
    saleProduct.belongsTo(sale, { foreignKey: 'sale_id', as: 'sale' });
  };

  saleProduct.associate = ({ product }) => {
    saleProduct.belongsTo(product, { foreignKey: 'product_id', as: 'product' });
  };

  return saleProduct;
};

module.exports = saleProduct;
