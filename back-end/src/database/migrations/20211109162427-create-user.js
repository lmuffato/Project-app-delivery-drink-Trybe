'use strict';
const userSchema = require('../schemas/user');
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('users', userSchema(DataTypes));
  },
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   */
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  }
};
