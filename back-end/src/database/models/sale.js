'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    totalPrice: DataTypes.DECIMAL(10, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    saleDate: DataTypes.DATE,
  },
    {
      updatedAt: false,
      createdAt: 'saleDate',
      tableName: 'sales',
    });

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, { foreignKey: 'userId', as: 'userInfo' });

    Sale.belongsTo(models.user, { foreignKey: 'sellerId', as: 'sellerInfo' });
  };

  return Sale;
};
