const product = (sequelize, DataTypes) => {
  const product = sequelize.define("product", {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4, 2),
    url_image: DataTypes.STRING(200),
  }, { timestamps: false });

  return product;
};

module.exports = product;
