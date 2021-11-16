'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    url_image: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'products',
    });

  return Product;
};
