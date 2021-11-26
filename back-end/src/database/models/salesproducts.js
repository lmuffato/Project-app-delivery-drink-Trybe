const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define("salesProduct", {
    sale_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: DataTypes.INTEGER,
    allowNull: false,
  }, { timestamps: false });

  salesProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: salesProduct,
      foreignKey: 'sale_Id',
      otherKey: 'product_Id',
    });

    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: salesProduct,
      foreignKey: 'product_Id',
      otherKey: 'sale_Id',
    });
  };

  return salesProduct;
};

module.exports = salesProduct;
