module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    user_id: { type: DataTypes.INTEGER, foreignKey: true },
    seller_id: { type: DataTypes.INTEGER, foreignKey: true },
    // A declaração da Foreign Key é opcional no model
  },
  {
    timestamps: false,
    tableName: 'Sales',
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'user' });
    Sale.belongsTo(models.User,
      { foreignKey: 'seller_id', as: 'seller' });
    Sale.hasMany(models.SaleProduct,
      { foreignKey: 'sale_id', as: 'sales' });
  };

  return Sale;
};