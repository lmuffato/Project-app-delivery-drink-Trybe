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
      total_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      delivery_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      delivery_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sale_date: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};
