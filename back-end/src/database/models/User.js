module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Users',
  });

  User.associate = (models) => {
    User.hasMany(models.Sale,
      { foreignKey: 'user_id', as: 'userPurchase' });
    User.hasMany(models.Sale,
      { foreignKey: 'seller_id', as: 'sellerSales' });
  };

  return User;
};
