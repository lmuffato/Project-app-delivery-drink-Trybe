/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
 module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
      id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
      name: DataTypes.STRING,
    }, { timestamps: false });
Product.associate = (models) => { };
return Product;
};
