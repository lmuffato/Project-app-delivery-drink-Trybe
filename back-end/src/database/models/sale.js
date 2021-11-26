module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    userId: { type: DataTypes.INTEGER },
    sellerId: { type: DataTypes.INTEGER },
    totalPrice: { type: DataTypes.DECIMAL },
    deliveryAddress: { type: DataTypes.STRING },
    deliveryNumber: { type: DataTypes.STRING },
    saleDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    status: { type: DataTypes.STRING }
  },
  {
    timestamps: false,
    tableName: 'sales',
    underscored: true,
  });

  Sale.associate = ({ User }) => {
    Sale.belongsTo(User, { foreignKey: 'userId', as: 'user' });
    Sale.belongsTo(User, { foreignKey: 'sellerId', as: 'seller' });
  };

  return Sale;
};
