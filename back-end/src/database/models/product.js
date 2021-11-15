module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(5,3),
    url_image: DataTypes.STRING,
  }, {timestamps: false}, {tableName: 'products'});
  product.associate = (models) => {
    product.hasMany(models.salesProduct, {
      foreignKey: 'product_id',
      as: 'salesProducts',
    });
  };
  return product;
};