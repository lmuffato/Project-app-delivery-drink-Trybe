module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: { type: DataTypes.INTEGER },
    seller_id: { type: DataTypes.INTEGER },
    total_price: { type: DataTypes.DECIMAL(9,2) },
    delivery_address: { type: DataTypes.STRING },
    delivery_number: { type: DataTypes.STRING },
    sale_date: { type: DataTypes.DATE },
    status: { type: DataTypes.STRING },
  }, { underscored: false ,timestamps: false, tableName: 'sales' });

  Sale.associate = (models) => {
    models.Sale.belongsTo(models.User, { 
      as: 'user',
      foreignKey: ['user_id, seller_id'],
    });
  }

  return Sale;
};