'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: { type: Sequelize.INTEGER },
      seller_id: { type: Sequelize.INTEGER },
      total_price: { type: Sequelize.DECIMAL(9,2) },
      delivery_address: { type: Sequelize.STRING },
      delivery_number: { type: Sequelize.STRING },
      sale_date: { type: Sequelize.DATE },
      status: { type: Sequelize.STRING },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};