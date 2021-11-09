module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    productId: DataTypes.INTEGER,
    saleId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    onUpdate: DataTypes.STRING,
    onDelete: DataTypes.STRING
  }, {
    tableName: 'SalesProducts',
    timestamps: true,
  });

  return SalesProducts;
};
