module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "users",
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Sale, {
      foreignKey: "userId",
      constraints: false,
    });
  };

  User.associate = (models) => {
    User.hasMany(models.Sale, {
      foreignKey: "sellerId",
      constraints: false,
    });
  };

  return User;
};
