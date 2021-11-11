module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.STRING,
    seller_id: DataTypes.STRING,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'sales',
  });

Sale.associate = (models) => {
  Sale.belongsTo(
      models.User,
        { foreignKey: 'user_id', as: 'users' }
  );
};

  return Sale;
};