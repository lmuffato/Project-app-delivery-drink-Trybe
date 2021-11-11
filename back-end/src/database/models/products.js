module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });

  // Product.associate = (models) => {
  //   Product.hasMany(
  //     models.salesProducts,
  //     { foreignkey: 'id', as: 'product_id' }
  //   );
  // }

  return Product;
};