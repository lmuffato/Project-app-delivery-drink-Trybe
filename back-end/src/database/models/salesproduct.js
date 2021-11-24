'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
 const SalesProduct = sequelize.define(
   'SalesProduct',
   {
     sale_id: {
       type: DataTypes.INTEGER,
     },
     product_id: {
       type: DataTypes.INTEGER,
     },
     quantity: DataTypes.INTEGER,
   }, { timestamps: false, tableName: 'salesProducts' })
  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(models.Sale, { foreignKey: 'sale_id' });
    SalesProduct.belongsTo(models.Product, { foreignKey: 'product_id' });
  };
  return SalesProduct;
};
