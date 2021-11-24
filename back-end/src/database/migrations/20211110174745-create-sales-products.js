'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      sale_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        primaryKey: true,
        references: { model: 'sales', key: 'id'}
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        primaryKey: true,
        references: { model: 'products', key: 'id'}
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  }
};