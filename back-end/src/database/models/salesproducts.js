module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProduct', {
    sale_id: { type: DataTypes.INTEGER, foreignKey: true  },
    product_id: { type: DataTypes.INTEGER, foreignKey: true  },
    quantity: DataTypes.INTEGER
  }, {
    tableName: 'salesProducts',
    timestamps: false,
  });

  SalesProducts.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
  };

  return SalesProducts;
};
