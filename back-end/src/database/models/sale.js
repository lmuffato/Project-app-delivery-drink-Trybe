module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    totalPrice: DataTypes.DECIMAL(7, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER
  }, {timestamps: false, tableName: 'sales', underscored: true});
  sale.associate = (models) => {
    sale.hasMany(models.salesProduct, {
      foreignKey: 'sale_id',
      as: 'salesProduct',
    });
    sale.belongsTo(models.user, {
      as: 'user',
      foreignKey: 'user_id',
    });
    sale.belongsTo(models.user, {
      as: 'seller',
      foreignKey: 'seller_id',
    });
  };
  return sale;
};