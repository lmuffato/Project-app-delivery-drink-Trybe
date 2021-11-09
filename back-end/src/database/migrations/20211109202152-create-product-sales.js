
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('productsSales', {
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'products', // nome da tabela
          key: 'id'
        },
      },
      sale_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'sales',
          key: 'id'
        },
      quantity: Sequelize.INTEGER,  
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};
