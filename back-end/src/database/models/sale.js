const sale = (sequelize, DataTypes) => {
  const sale = sequelize.define("sale", {
    user_id: DataTypes.INTEGER,
    seler_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING(100),
    delivery_number: DataTypes.STRING(50),
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING(50),
  }, { timestamps: false });

  sale.associate = ({ user }) => {
    sale.belongsTo(user, { foreignKey: 'user_id', as: 'user' });
  };

  sale.associate = ({ user }) => {
    sale.belongsTo(user, { foreignKey: 'seler_id', as: 'seler' });
  };

  return sale;
};

module.exports = sale;
