module.exports = (sequelize, DataTypes) => {
  const sales_products = sequelize.define('sales_products', {
    quantity: DataTypes.INTEGER
  },
    { timestamps: false, tableName: 'sales_products' });

    sales_products.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'product',
      through: sales_products,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });

    models.sales.belongsToMany(models.products, {
      as: 'sale',
      through: sales_products,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return sales_products;
};