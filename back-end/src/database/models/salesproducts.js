module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProduct', {
    saleId: { type: DataTypes.INTEGER, foreignKey: true  },
    productId: { type: DataTypes.INTEGER, foreignKey: true  },
    quantity: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    tableName: 'salesProducts',
    timestamps: false,
    underscored: true
  });

  SalesProducts.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.Sale.belongsToMany(models.Product, {
      as: 'product',
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return SalesProducts;
};
