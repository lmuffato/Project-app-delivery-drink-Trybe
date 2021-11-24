module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING(50),
    userId: { type: DataTypes.INTEGER, primaryKey: true },
    sellerId: { type: DataTypes.INTEGER, primaryKey: true }, 
  },
  {
    timestamps: false,
    tableName: 'sales',
    underscored: true,
  });
  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { foreignKey: 'sellerId', as: 'seller'});
  };
  return Sale;
};
