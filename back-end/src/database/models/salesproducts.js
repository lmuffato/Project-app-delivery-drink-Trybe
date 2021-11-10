module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('salesProduct', {
    sale_id: { type: DataTypes.INTEGER, foreignKey: true  },
    product_id: { type: DataTypes.INTEGER, foreignKey: true  },
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'salesProducts',
  });

  SalesProducts.associate = (models) => {
    models.BlogPost.belongsToMany(models.sales, {
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
      as: 'sales',
    });
    models.Category.belongsToMany(models.products, {
      through: SalesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
      as: 'products',
    });
  };

  return SalesProducts;
};