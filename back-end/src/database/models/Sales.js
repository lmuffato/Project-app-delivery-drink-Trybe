const Sales = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      notNull: true,
    },
    delivery_address: {
      type: DataTypes.STRING,
      notNull: true,
    },
    delivery_number: {
      type: DataTypes.STRING,
      notNull: true,
    },
    sale_date: {
      type: DataTypes.DATE,
      notNull: true,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      notNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'user_id',
    },
    sellerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'seller_id',
    },
  },
  {
    timestamps: false,
  });

  sales.associate = (models) => {
    sales.belongsTo(models.user,
      { foreignKey: 'user_id', as: 'user' });
    sales.belongsTo(models.user,
      { foreignKey: 'seller_id', as: 'seller' });
  };

  return sales;
};

module.exports = Sales;
