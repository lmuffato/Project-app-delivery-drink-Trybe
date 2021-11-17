module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    productId: {type: DataTypes.INTEGER, field: 'product_id'},
    saleId: {type: DataTypes.INTEGER, field: 'sale_id'},
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'SalesProducts',
    timestamps: false,
  });

  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.Products.belongsToMany(models.Sales, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    })
  }

  return SalesProducts;
};
