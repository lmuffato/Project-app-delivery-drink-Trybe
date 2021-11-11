module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', 
  {
    name: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [6, 32]
      }
    },
    email: { 
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    role: DataTypes.VARCHAR
  }, 
  {
    timestamps: false,
    tableName: 'Users',
  }, { timestamps: false });
  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'user_id' });
  };
  return User;
};