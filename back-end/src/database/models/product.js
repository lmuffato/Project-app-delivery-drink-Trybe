'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product',
  {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: DataTypes.STRING,
  },
  { 
    timestamps: false,
    tableName: 'products',
    underscored: true,
  });

  Product.associate = (models) => {
    Product.hasMany(models.SalesProduct, { foreignKey: 'product_id' });
  };
  
  return Product;
};