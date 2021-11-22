'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    total_price: DataTypes.DECIMAL(10, 2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    status: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    sale_date: DataTypes.DATE,
  },
    {
      updatedAt: false,
      createdAt: 'sale_date',
      tableName: 'sales',
    });

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, { foreignKey: 'user_id', as: 'userInfo' });

    Sale.belongsTo(models.user, { foreignKey: 'seller_id', as: 'sellerInfo' });
  };

  return Sale;
};
