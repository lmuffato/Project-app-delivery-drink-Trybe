// models/user.js
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
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

  users.associate = (models) => { // Define a relação de associação de um ou mais campos desta tabela com outra.
    users.hasMany(models.sales, // Um usuário pode ter vários posts na tabela BlogPost.
      { foreignKey: 'user_Id', as: 'Sale' }); // O campo userId será exibido como 'userPosts' na tabela BlogPost.
  };
  return users;
};
