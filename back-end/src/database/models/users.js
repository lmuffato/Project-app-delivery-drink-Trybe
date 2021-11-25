// models/user.js
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,  
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  users.associate = (models) => {
    users.hasMany(models.sales,
      { foreignKey: 'id', as: 'users' },
      );
  };
  
  return users;
};
