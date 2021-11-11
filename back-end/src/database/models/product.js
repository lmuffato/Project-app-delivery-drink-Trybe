const product = (sequelize, DataTypes) => {
  const productSchema = {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(10, 2),
    urlImage: { type: DataTypes.STRING(255), field: "url_image" },
  }
  const product = sequelize.define("product", productSchema, 
    { timestamps : false },
  );

  return product;
};

module.exports = product;
