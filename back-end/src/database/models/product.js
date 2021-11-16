/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * @return
 */
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define(
    "products",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      url_image: DataTypes.STRING,
    },
    { tableName: "products", timestamps: false }
  );
  products.associate = (_models) => {};
  return products;
};
