module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'user_id'
    },
    sellerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'seller_id',
      defaultValue: 0,
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
    tableName: 'sales',
    timestamps: false,
  });

  sales.associate = (models) => {
    models.sales.belongsTo(models.user, 
      { foreignKey: 'userId', as: 'user' }
    );
    models.sales.belongsTo(models.user,
      { foreignKey: 'sellerId', as: 'seller' }  
    );
  }
  
  return sales;
};
