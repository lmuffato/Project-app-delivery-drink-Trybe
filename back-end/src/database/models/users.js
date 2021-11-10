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
  }, { timestamps: false, tableName: 'users'},
  );

  User.associate = (models) => {
    User.hasMany(models.Sale, {
      as: 'Sales',
      foreignKey: ['user_id', 'seller_id'],
    });
  }

  return User;
};