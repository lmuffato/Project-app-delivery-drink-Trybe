module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    total_price: DataTypes.DECIMAL,
    user_id: { type: DataTypes.DECIMAL, foreignKey: true  },
    seller_id: { type: DataTypes.DECIMAL, foreignKey: true  },
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    // sequelize,
    // modelName: 'sales',
  });

  // Sales.associate = (models) => {
  //   Sales.hasMany(
  //     models.SalesProducts,
  //     { foreignKey: 'id', as: 'seller_id' },
  //     { foreignKey: 'id', as: 'user_id' }
  // );
// };

  return Sales;
};