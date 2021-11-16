const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    user_id: DataTypes.INTEGER,
    seler_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING(100),
    delivery_number: DataTypes.STRING(50),
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING(50),
  }, { timestamps: false });

  Sale.associate = ({ User }) => {
    Sale.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
  };

  Sale.associate = ({ User }) => {
    Sale.belongsTo(User, { foreignKey: 'seler_id', as: 'seler' });
  };

  return Sale;
};

module.exports = Sale;
