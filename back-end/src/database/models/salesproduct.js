module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', {
    quantity: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    saleId: DataTypes.INTEGER
  }, {timestamps: false, tableName: 'salesProducts', underscored: true});
  salesProduct.associate = (models) => {
    salesProduct.belongsTo(models.sale, {
      as: 'sale',
      through: salesProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    salesProduct.belongsTo(models.product, {
      as: 'product',
      through: salesProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    })
  }
  return salesProduct;
};