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
<<<<<<< HEAD
    models.Products.belongsToMany(models.Sales, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
=======
    models.Products.belongsToMany(models.sales, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
>>>>>>> 9ccbd97ccb7a8494ff47dcf553a4a224ae602cbf
    })
  }

  return salesProducts;
};
