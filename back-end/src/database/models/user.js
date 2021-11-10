// models/user.js
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,  
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    tableName: 'users', // Define o nome da tabela a ser usada, ignorando o nome definido no models.
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`.
  });

  user.associate = (models) => { // Define a relação de associação de um ou mais campos desta tabela com outra.
    user.hasMany(models.sales, // Um usuário pode ter vários posts na tabela BlogPost.
      { foreignKey: 'user_id', as: 'sales_id' }); // O campo userId será exibido como 'userPosts' na tabela BlogPost.
  };
  return user;
};
