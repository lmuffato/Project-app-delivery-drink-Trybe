// models/sales.js
module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: {type: DataTypes.INTEGER, foreignKey: true},
    sellerId: {type: DataTypes.INTEGER, foreignKey: true},
    totalPrice: { type: DataTypes.DECIMAL(9,2) },
    deliveryAddress: { type: DataTypes.STRING },
    deliveryNumber: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    saleDate: { type: DataTypes.DATE }
  },
  {
    tableName: 'sales', // Tabela a ser acessada pelo banco de dados;
    timestamps: false,
    underscored: true,
     // Quando este campo está habilitado, os campos createdAt e updatedAt são automaticamente preenchidos com suas respectivias datas.
    // createdAt: 'sale_date',
    // updatedAt: 'updated',
    // tableName: 'sales',
  });

  sales.associate = (models) => {
    sales.belongsTo(models.users,
      { foreignKey: 'userId', as: 'users' },
      { foreignKey: 'sellerId', as: 'sellers' },
      );
  };

  // sales.associate = (models) => {
  //   sales.hasMany(models.products, { foreignKey: 'id', as: 'users' });
  // };

  return sales;
};
