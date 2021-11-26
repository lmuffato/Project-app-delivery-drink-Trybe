module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: { 
      type: DataTypes.STRING,
      unique: true,
      validate: { isEmail: true },
     },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
  }, { timestamps: false, tableName: 'users'},
  );

  User.associate = (models) => {
    User.hasMany(models.Sale, {
      as: 'customerSales',
      foreignKey: 'userId',
    });

    User.hasMany(models.Sale, {
      as: 'sellerSales',
      foreignKey: 'sellerId',
    });
  }

  return User;
};