module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
  });

  // User.associate = (models) => {
  //   models.User.hasMany(models.sales, 
  //     { foreignKey: 'user_id', as: 'user' }
  //   )  
  // }
  
  return user;
};
