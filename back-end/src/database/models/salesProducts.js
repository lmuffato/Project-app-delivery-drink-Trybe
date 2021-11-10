const modelConfig = {
  tableName: 'salesProducts',
  timestamps: false, 
};

// models/PostCategory.js
module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('salesProducts',
    {
      quantity: DataTypes.INTEGER,
    }, modelConfig);

  PostCategory.associate = (models) => { // Essa associação define o relacionamento N:N entre as tabelas Category e BlogPost.
    // Define o relacionamento entre as tabelas Category e BlogPost;
    models.Category.belongsToMany(models.sales, { // Uma categoria pode pertencer a vários posts.
      as: 'products', // A coluna postId da tabela PostCategory é que receberá a associação com as chaves extrangeiras.
      through: PostCategory, // A associação entre os campos será feita através da tabela PostCategory
      foreignKey: 'sale_id', // A chave extrangeira "categoryId" é a chave que será associada a chave otherKey "postId", desta mesma tabela.
      otherKey: 'product_id', // A chave  é a outra chave associada a foreignKey "categoryId".
    });

    // Define o relacionamento entre as teabelas Category e BlogPost;
    models.BlogPost.belongsToMany(models.products, { // Um post pode ter maisd e uma categoria
      as: 'sales', // A coluna categoryId da tabela PostCategory é que receberá a associação com as chaves extrangeiras.
      through: PostCategory, // A associação entre os campos será feita através da tabela PostCategory
      foreignKey: 'product_id', // A chave extrangeira "postId" é a chave que será associada a chave otherKey "categoryId", desta mesma tabela.
      otherKey: 'sale_id', // A chave "categoryId" é a outra chave associada a foreignKey "postId".
    });
  };
  return PostCategory;
};


// models.BlogPost.belongsToMany(models.Category,
//   { as: 'categories', through: PostsCategory, foreignKey: 'postId', otherKey: 'categoryId' });
//   models.Category.belongsToMany(models.BlogPost, {
//   as: 'posts',
//   through: PostsCategory,
//   foreignKey: 'categoryId',
//   otherKey: 'postId',
//   }); 