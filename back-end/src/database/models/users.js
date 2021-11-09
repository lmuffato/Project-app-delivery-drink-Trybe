module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: { type: DataTypes.STRING },
    email: { 
      type: DataTypes.STRING,
      unique: true,
      validate: { isEmail: true },
     },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
  }, { timestamp: false, tableName: 'users'},
  );
  User.associate = (models) => {
    User.hasMany(models.Sales, {
      as: 'Sales',
      foreignKey: ['user_id', 'seller_id'],
    });
  }
  return User;
};