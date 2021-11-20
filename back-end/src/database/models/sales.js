// models/sales.js
module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: {type: DataTypes.INTEGER, foreignKey: true},
    // seller_id: DataTypes.INTEGER,
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

  sales.associate = (models) => { // Define a associação entre um campo da tabela  BlogPots e a tabela Users.
    sales.belongsTo(models.users, { // O campo indicado pertence a tabela User, acessada pelo models.User.
      foreignKey: 'userId', as: 'users' }); // Esse campo acessa a chave extrangeira userId conffigurada no migrate, e exibe esse campo com o nome "user".
      //  foreignKey: ['user_id', 'seller_id']);  Usar esse trecho em substituição ao acima, se for usar a seller_id
  };
  return sales;
};
