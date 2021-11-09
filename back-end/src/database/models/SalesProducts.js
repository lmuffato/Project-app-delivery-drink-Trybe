const SalesProducts = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts',
    {
      // saleId: { type: DataTypes.INTEGER, primaryKey: true },
      // productId: { type: DataTypes.INTEGER, primaryKey: true },
      quantity: {
        type: DataTypes.INTEGER,
        notNull: true,
      },
    },
    {
      underscored: true,
      tableName: 'salesProducts', 
      timestamps: false,
    },
  );

  salesProducts.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };

  return salesProducts;
};

module.exports = SalesProducts;
