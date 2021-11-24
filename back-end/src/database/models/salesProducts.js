module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    quantity: DataTypes.INTEGER
  },
    { timestamps: false, tableName: 'salesProducts' });

    salesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'product',
      through: salesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });

    models.sales.belongsToMany(models.products, {
      as: 'sale',
      through: salesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
  };

  return salesProducts;
};