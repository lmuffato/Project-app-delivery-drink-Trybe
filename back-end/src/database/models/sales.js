module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.STRING,
    seller_id: DataTypes.STRING,
    total_price: { type: DataTypes.DECIMAL, allowNull: false },
    delivery_address: { type: DataTypes.STRING, allowNull: false },
    delivery_number: { type: DataTypes.STRING, allowNull: false }, 
    sale_date: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false }
  }, {
    tableName: 'sales',
    timestamps: false,
  });

  Sale.associate = (models) => {
    // Sale.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
    Sale.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'users' },
      { foreignKey: 'seller_id', as: 'users' }
    );
    Sale.hasMany(models.SalesProduct, { foreignKey: 'sale_id', as: 'salesProducts' });
  };

  return Sale;
};
