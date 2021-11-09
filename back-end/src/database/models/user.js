module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    onUpdate: DataTypes.STRING,
    onDelete: DataTypes.STRING
  }, {
    tableName: 'Users',
    timestamps: true,
  });

  return User;
};
