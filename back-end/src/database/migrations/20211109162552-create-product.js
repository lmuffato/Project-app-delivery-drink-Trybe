'use strict';
const productSchema = require('../schemas/product');
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100)
      },
      price: {
        type: Sequelize.DECIMAL(4, 2)
      },
      url_image: {
        type: Sequelize.STRING(200)
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('products');
  }
};
