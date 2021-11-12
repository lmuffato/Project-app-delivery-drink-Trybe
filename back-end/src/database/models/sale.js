const salesSchema = require('../schemas/sale');
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
 module.exports = (sequelize, DataTypes) => {  
  const Sale = sequelize.define('Sale', salesSchema(DataTypes), { timestamps: false });
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { as: 'user' });
    Sale.belongsTo(models.User, { as: 'seller' });
  };  
  return Sale;
};
