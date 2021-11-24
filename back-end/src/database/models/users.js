module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'users',
  });

  users.associate = (models) => {
    users.hasMany(models.sales,
      { foreignKey: 'seller_id', as: 'seller' });
    users.hasMany(models.sales,
      { foreignKey: 'user_id', as: 'user' });
  };

  return users;
};
