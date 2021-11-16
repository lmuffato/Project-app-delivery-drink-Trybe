module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    tableName: 'Sales',
    timestamps: false,
  });

  return Sales;
};
