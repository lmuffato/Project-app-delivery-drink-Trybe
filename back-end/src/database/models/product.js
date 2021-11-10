module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4, 2),
    urlImage: DataTypes.STRING(200),
  },
  {
    timestamps: false,
    tableName: 'products',
    underscored: true,
  });

  return Product;
};
