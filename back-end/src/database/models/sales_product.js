/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * @return
 */
module.exports = (sequelize, DataTypes) => {
  const ProductsSale = sequelize.define(
    "ProductsSale",
    {quantity: DataTypes.INTEGER},
    { tableName: "salesProducts", timestamps: false }
  );
  ProductsSale.associate = ({ Sale, Product }) => {
    Product.belongsToMany(Sale, {
      as: "products",
      through: ProductsSale,
      foreignKey: "product_id",
      otherKey: "sale_id",
    });
    Sale.belongsToMany(Product, {
      as: "sales",
      through: ProductsSale,
      foreignKey: "sale_id",
      otherKey: "product_id",
    });
  };
  return ProductsSale;
};
