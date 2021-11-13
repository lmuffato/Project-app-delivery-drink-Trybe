const salesSchema = require('../schemas/sale');
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
 module.exports = (sequelize, DataTypes) => {  
  const Sale = sequelize.define('sale', {
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.STRING,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, { timestamps: false });
  Sale.associate = (models) => {
    Sale.belongsTo(models.user, { as: 'user' });
    Sale.belongsTo(models.user, { as: 'seller' });
  };  
  return Sale;
};
