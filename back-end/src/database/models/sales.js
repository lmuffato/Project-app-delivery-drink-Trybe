module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: DataTypes.STRING,
    sellerId: DataTypes.STRING,
    totalPrice: { type: DataTypes.INTEGER, allowNull: false },
    deliveryAddress: { type: DataTypes.STRING, allowNull: false },
    deliveryNumber: { type: DataTypes.STRING, allowNull: false },  
    saleDate: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false }  
  }, {
    tableName: 'sales',
    timestamps: false,
    underscored: true
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user_id' });
    /* Sale.belongsTo(models.User,
      { foreignKey: 'userId', as: 'users' },
      /* { foreignKey: 'sellerId', as: 'users' } 
    ); */

  };

  return Sale;
};
