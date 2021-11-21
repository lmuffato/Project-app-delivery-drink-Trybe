const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define("salesProduct", {
    sale_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'sales',
        key: 'id',
      }
    },
    product_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id',
      }
    },
    quantity: DataTypes.INTEGER,
  }, { timestamps: false });

  salesProduct.associate = ({ sale }) => {
    salesProduct.belongsTo(sale, { foreignKey: 'sale_id', as: 'sale' });
  };

  salesProduct.associate = ({ product }) => {
    salesProduct.belongsTo(product, { foreignKey: 'product_id', as: 'product' });
  };

  return salesProduct;
};

module.exports = salesProduct;
