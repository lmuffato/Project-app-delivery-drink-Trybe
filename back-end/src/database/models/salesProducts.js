module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    quantity: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    subTotal: DataTypes.DECIMAL,
  },
    { timestamps: false, tableName: 'salesProducts' });

    salesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'product',
      through: salesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });

    models.sales.belongsToMany(models.products, {
      as: 'sale',
      through: salesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return salesProducts;
};