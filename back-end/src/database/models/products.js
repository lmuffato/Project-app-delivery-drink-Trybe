module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.INTEGER,
    price: DataTypes.STRING,
    url_image: DataTypes.STRING,
  }, {
    tableName: 'Products',
    timestamps: false,
  });

  // Products.associate = (models) => {
  //   Products.belongsToMany(models.Sales, {
  //     through: 'SalesProducts',
  //     as: 'sales',
  //     foreignKey: 'saleId'
  //   })
  // }

  return Products;
};
