'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'Sale',
    {
      user_id: DataTypes.INTEGER,
      seller_id: DataTypes.INTEGER,
      total_price: DataTypes.FLOAT,
      delivery_adress: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING, 
    },
    { timestamps: true, createdAt: 'sale_date',  updatedAt: false, },
  );
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'user_id' });
    Sale.belongsTo(models.User, { foreignKey: 'seller_id' });
    Sale.hasMany(models.SalesProduct, { foreignKey: 'sale_id' });
  };
  return Sale;
};