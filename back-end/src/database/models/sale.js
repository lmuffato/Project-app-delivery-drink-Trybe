module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    total_price: DataTypes.DECIMAL(5, 3),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {timestamps: false});
  Sale.associate = (models) => {
    Sale.hasMany(models.SalesProduct, {
      foreignKey: 'sale_id',
      as: 'salesProduct',
    });
    Sale.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id',
    });
    Sale.belongsTo(models.User, {
      as: 'seller',
      foreignKey: 'seller_id',
    });
  };
  return Sale;
};