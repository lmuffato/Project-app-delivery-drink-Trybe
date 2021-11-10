module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'products',
  });

  Product.associate = (models) => {
    Product.hasMany(
      models.SalesProducts,
      { foreignkey: 'id', as: 'product_id' }
    );
  }

  return Product;
};
