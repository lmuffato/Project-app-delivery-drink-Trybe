const salesSchema = require('../schemas/sale');
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
 module.exports = (sequelize, DataTypes) => {  
  const sale = sequelize.define('sale', salesSchema(DataTypes), { timestamps: false });
  sale.associate = (models) => {
    sale.belongsTo(models.user, { as: 'user' });
    sale.belongsTo(models.user, { as: 'seller' });
  };  
  return sale;
};
