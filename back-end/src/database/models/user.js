module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', 
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
    role: DataTypes.STRING
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