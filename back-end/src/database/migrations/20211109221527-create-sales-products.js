'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      saleId: {
        type: Sequelize.INTEGER,
        references: { model: 'sales', key: 'id' },
        onDelete: 'CASCADE',
        primaryKey: true,
        allowNull: false,
      },
      productId: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id' },
        onDelete: 'CASCADE',
        primaryKey: true,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER, allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  }
};
