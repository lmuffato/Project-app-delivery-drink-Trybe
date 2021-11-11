'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      seller_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
        field: 'total_price',
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING(100),
        field: 'delivery_address',
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.STRING(100),
        field: 'delivery_number',
      },
      sale_date: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_date',
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};
