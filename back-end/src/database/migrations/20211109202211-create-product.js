'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
        unique: true,
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(4, 2),
      },
      url_image: {
        allowNull: false,
        type: Sequelize.STRING(200),
        defaultValue: '',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};
