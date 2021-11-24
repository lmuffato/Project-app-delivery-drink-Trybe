// models/products.js
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,  
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING,
  },
  {
    tableName: 'products', // Define o nome da tabela a ser usada, ignorando o nome definido no models.
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`.
    underscored: true,
  });

  // products.associate = (models) => { // Define a relação de associação de um ou mais campos desta tabela com outra.
  //   products.hasMany(models.sales, // Um usuário pode ter vários posts na tabela BlogPost.
  //     { foreignKey: 'user_id', as: 'sales_user' }); // O campo userId será exibido como 'userPosts' na tabela BlogPost.
  // };

  return products;
};
