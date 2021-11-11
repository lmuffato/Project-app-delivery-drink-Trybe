const userSchema = require('../schemas/user');
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
 module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', userSchema(DataTypes), { timestamps: false });
  User.associate = (models) => {
    User.hasMany(models.Sale);
  };
  return User;
};
