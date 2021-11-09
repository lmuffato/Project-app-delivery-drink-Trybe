module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.INTEGER,
    price: DataTypes.STRING,
    url_image: DataTypes.STRING,
    onUpdate: DataTypes.STRING,
    onDelete: DataTypes.STRING
  }, {
    tableName: 'Products',
    timestamps: true,
  });

  return Products;
};
