module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'user_id'
    },
    sellerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'seller_id'
    },
    totalPrice: {type: DataTypes.DECIMAL, field: 'total_price'},
    deliveryAddress: {type: DataTypes.STRING, field: 'delivery_address'},
    deliveryNumber: {type: DataTypes.STRING, field: 'delivery_number'},
    saleDate: {
      type: DataTypes.DATE,
      field: 'sale_date',
      notNull: true,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pendente'
    },
  }, {
    tableName: 'Sales',
    timestamps: false,
  });
  
  return Sales;
};
