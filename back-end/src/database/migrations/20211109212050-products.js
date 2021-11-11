'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      urlImage: {
        type: Sequelize.STRING
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('products');
  }
};
