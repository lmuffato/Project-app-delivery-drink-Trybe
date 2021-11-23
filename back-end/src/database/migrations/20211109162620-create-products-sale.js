'use strict';
const productsSaleSchema = require('../schemas/productsSale');
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('salesProducts', productsSaleSchema(DataTypes));
  },
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   */
  down: async (queryInterface) => {
    await queryInterface.dropTable('salesProducts');
  }
};
