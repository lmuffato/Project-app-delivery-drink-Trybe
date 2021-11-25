const user = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    name: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    password: DataTypes.STRING(32),
    role: DataTypes.STRING(20),
  }, { timestamps: false });

  return user;
};

user.associate = ({ sale }) => {
  user.hasMany(sale, { foreignKey: 'user_id', as: 'customerSales' });
  user.hasMany(sale, { foreignKey: 'seller_id', as: 'sellerSales' });
};

module.exports = user;
