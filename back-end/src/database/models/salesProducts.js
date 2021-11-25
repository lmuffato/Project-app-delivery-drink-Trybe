module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts',
    {
      quantity: DataTypes.INTEGER,
    }, 
    {
      tableName: 'salesProducts',
      timestamps: false, 
      underscored: true,
    });

  salesProducts.associate = (models) => { // Essa associação define o relacionamento N:N entre as tabelas Category e BlogPost.
    // Define o relacionamento entre as tabelas Category e BlogPost;
    models.products.belongsToMany(models.sales, { // Uma categoria pode pertencer a vários posts.
      as: 'sales', // A coluna postId da tabela salesProducts é que receberá a associação com as chaves extrangeiras.
      through: salesProducts, // A associação entre os campos será feita através da tabela salesProducts
      foreignKey: 'saleId', // A chave extrangeira "categoryId" é a chave que será associada a chave otherKey "postId", desta mesma tabela.
      otherKey: 'productId', // A chave  é a outra chave associada a foreignKey "categoryId".
    });

    // Define o relacionamento entre as teabelas Category e BlogPost;
    models.sales.belongsToMany(models.products, { // Um post pode ter maisd e uma categoria
      as: 'products', // A coluna categoryId da tabela salesProducts é que receberá a associação com as chaves extrangeiras.
      through: salesProducts, // A associação entre os campos será feita através da tabela salesProducts
      foreignKey: 'saleId', // A chave extrangeira "postId" é a chave que será associada a chave otherKey "categoryId", desta mesma tabela.
      otherKey: 'productId', // A chave "categoryId" é a outra chave associada a foreignKey "postId".
    });
  };
  return salesProducts;
};


// models.BlogPost.belongsToMany(models.Category,
//   { as: 'categories', through: PostsCategory, foreignKey: 'postId', otherKey: 'categoryId' });
//   models.Category.belongsToMany(models.BlogPost, {
//   as: 'posts',
//   through: PostsCategory,
//   foreignKey: 'categoryId',
//   otherKey: 'postId',
//   });

/* BACKUP
module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts',
    {
      quantity: DataTypes.INTEGER,
    }, 
    {
      tableName: 'salesProducts',
      timestamps: false, 
      underscored: true,
    });

  salesProducts.associate = (models) => { // Essa associação define o relacionamento N:N entre as tabelas Category e BlogPost.
    // Define o relacionamento entre as tabelas Category e BlogPost;
    models.products.belongsToMany(models.sales, { // Uma categoria pode pertencer a vários posts.
      as: 'sales', // A coluna postId da tabela salesProducts é que receberá a associação com as chaves extrangeiras.
      through: salesProducts, // A associação entre os campos será feita através da tabela salesProducts
      foreignKey: 'saleId', // A chave extrangeira "categoryId" é a chave que será associada a chave otherKey "postId", desta mesma tabela.
      otherKey: 'productId', // A chave  é a outra chave associada a foreignKey "categoryId".
    });

    // Define o relacionamento entre as teabelas Category e BlogPost;
    models.sales.belongsToMany(models.products, { // Um post pode ter maisd e uma categoria
      as: 'products', // A coluna categoryId da tabela salesProducts é que receberá a associação com as chaves extrangeiras.
      through: salesProducts, // A associação entre os campos será feita através da tabela salesProducts
      foreignKey: 'productId', // A chave extrangeira "postId" é a chave que será associada a chave otherKey "categoryId", desta mesma tabela.
      otherKey: 'saleId', // A chave "categoryId" é a outra chave associada a foreignKey "postId".
    });
  };
  return salesProducts;
};


// models.BlogPost.belongsToMany(models.Category,
//   { as: 'categories', through: PostsCategory, foreignKey: 'postId', otherKey: 'categoryId' });
//   models.Category.belongsToMany(models.BlogPost, {
//   as: 'posts',
//   through: PostsCategory,
//   foreignKey: 'categoryId',
//   otherKey: 'postId',
//   }); 
*/