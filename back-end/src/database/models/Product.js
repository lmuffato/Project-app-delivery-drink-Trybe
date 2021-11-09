module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING,
  },
  {
    timestamps: true,
    tableName: 'products',
  });

  Product.associate = (models) => {
    User.hasMany(models.SaleProduct, {
      foreignKey: 'productId', as: 'SaleProduct',
    });
  }; 

  return Product;
};
