module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  }, { timestamps: false, tableName: 'products' });

  Product.associate = ({ SaleProduct }) => {
    Product.hasMany(SaleProduct, {
      foreignKey: 'productId', as: 'salesproducts',
    });
  }

  return Product;
};
