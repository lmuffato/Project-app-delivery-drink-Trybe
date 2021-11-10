module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    // sequelize,
    tableName: 'users',
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(
        models.Sales,
          { foreignKey: 'id', as: 'seller_id' },
          { foreignKey: 'id', as: 'user_id'}
      );
  };

  return User;
};
