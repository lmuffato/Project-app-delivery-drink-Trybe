// models/sales.js
module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: { type: DataTypes.DECIMAL },
    delivery_address: { type: DataTypes.STRING },
    delivery_number: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
  },
  {
    tableName: 'sales', // Tabela a ser acessada pelo banco de dados;
    timestamps: false, // Quando este campo está habilitado, os campos createdAt e updatedAt são automaticamente preenchidos com suas respectivias datas.
  });

  BlogPost.associate = (models) => { // Define a associação entre um campo da tabela  BlogPots e a tabela Users.
    BlogPost.belongsTo(models.user, { // O campo indicado pertence a tabela User, acessada pelo models.User.
      foreignKey: 'sales_id', as: 'user_id' }); // Esse campo acessa a chave extrangeira userId conffigurada no migrate, e exibe esse campo com o nome "user".
  };
  return BlogPost;
};
