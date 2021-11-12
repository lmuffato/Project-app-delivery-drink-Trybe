const userSchema = require('../schemas/user');
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
 module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', userSchema(DataTypes), { timestamps: false });
  user.associate = (models) => {
    user.hasMany(models.sale);
  };
  return user;
};
