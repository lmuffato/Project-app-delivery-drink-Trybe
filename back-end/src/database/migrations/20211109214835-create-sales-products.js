module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SalesProducts', {
      saleId: {
        type: Sequelize.INTEGER,
        field: 'sale_id',
        references: {
          model: 'Sales',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      productId: {
        type: Sequelize.INTEGER,
        field: 'product_id',
        references: {
          model: 'Products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('SalesProducts');
  },
};
