'use strict';
const salesSchema = require('../schemas/sale');
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Sales', salesSchema(DataTypes));
  },
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   */
  down: async (queryInterface) => {
    await queryInterface.dropTable('Sales');
  }
};
