const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
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
    Sale.belongsTo(User, { foreignKey: 'seller_id', as: 'seller' });
  };

  return Sale;
};

module.exports = Sale;
