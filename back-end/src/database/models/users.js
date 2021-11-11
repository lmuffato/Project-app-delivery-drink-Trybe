module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    tableName: 'users',
    timestamps: false,
  });

User.associate = (models) => {
  // User.hasMany(models.Sale, { foreignKey: 'id', as: 'user_id' });
  User.hasMany(models.Sale,
    { foreignKey: 'user_id', as: 'sales' },
    { foreignKey: 'seller_id', as: 'sales' }
  );
};

  return User;
};
