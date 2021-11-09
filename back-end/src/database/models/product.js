module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(5,3),
    url_image: DataTypes.STRING,
  }, {timestamps: false});
  Product.associate = (models) => {
    Product.hasMany(models.SalesProduct, {
      foreignKey: 'product_id',
      as: 'SalesProducts',
    });
  };
  return Product;
};