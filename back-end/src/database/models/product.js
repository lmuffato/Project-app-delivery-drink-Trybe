'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product',
  {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_Image: DataTypes.STRING,
  },
  { 
    timestamps: false,
    tableName: 'products'
  });

  Product.associate = (models) => {
    Product.hasMany(models.SalesProduct, { foreignKey: 'product_id' });
  };
  
  return Product;
};