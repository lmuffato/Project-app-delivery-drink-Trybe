/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * @return
 */
module.exports = (sequelize, _DataTypes) => {
  const productsSale = sequelize.define(
    "productsSale",
    {},
    { timestamps: false }
  );
  productsSale.associate = ({ sales, products }) => {
    products.belongsToMany(sales, {
      as: "products",
      through: productsSale,
      foreignKey: "productId",
      otherKey: "saleId",
    });
    sales.belongsToMany(products, {
      as: "sales",
      through: productsSale,
      foreignKey: "saleId",
      otherKey: "productId",
    });
  };
  return productsSale;
};
