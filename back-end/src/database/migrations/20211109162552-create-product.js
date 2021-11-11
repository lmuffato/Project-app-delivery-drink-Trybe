'use strict';
const productSchema = require('../schemas/product');
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Products', productSchema(DataTypes));
  },
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   */
  down: async (queryInterface) => {
    await queryInterface.dropTable('Products');
  }
};
