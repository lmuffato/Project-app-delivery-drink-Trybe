module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'sales',
  });

  sales.associate = (models) => {
    sales.belongsTo(models.users,
      { foreignKey: 'user_id', as: 'user' },
      { foreignKey: 'seller_id', as: 'seller' });
    sales.hasMany(models.salesProducts,
      { foreignKey: 'sale_id', as: 'products' });
  };

  return sales;
};