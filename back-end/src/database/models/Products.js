const Products = (sequelize, DataTypes) => {
  const products = sequelize.define("products", {
    name: {
      type: DataTypes.STRING,
      notNull: true,
    },
    price: {
      type: DataTypes.DECIMAL,
      notNull: true,
    },
    url_image: {
      type: DataTypes.STRING,
      notNull: true,
      field: 'url_image',
    },
  });

  return products;
};

module.exports = Products;
