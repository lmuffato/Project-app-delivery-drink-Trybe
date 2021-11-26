module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    productId: {type: DataTypes.INTEGER, field: 'product_id'},
    saleId: {type: DataTypes.INTEGER, field: 'sale_id'},
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'salesProducts',
    timestamps: false,
  });

  salesProducts.associate = (models) => {
    models.sales.belongsToMany(models.Products, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.Products.belongsToMany(models.sales, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    })
  }

  return salesProducts;
};
