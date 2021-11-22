/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * @return
 */
module.exports = (sequelize, DataTypes) => {
  const ProductsSale = sequelize.define(
    "ProductsSale",
    {quantity: DataTypes.INTEGER},
    { tableName: "ProductsSale", timestamps: false }
  );
  ProductsSale.associate = ({ Sale, Product }) => {
    Product.belongsToMany(Sale, {
      as: "products",
      through: ProductsSale,
      foreignKey: "productId",
      otherKey: "saleId",
    });
    Sale.belongsToMany(Product, {
      as: "sales",
      through: ProductsSale,
      foreignKey: "saleId",
      otherKey: "productId",
    });
  };
  return ProductsSale;
};
