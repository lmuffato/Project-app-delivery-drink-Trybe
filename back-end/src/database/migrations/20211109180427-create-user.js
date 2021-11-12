'use strict';
module.exports = {
    /**
* 
* @param {import('sequelize').QueryInterface} queryInterface 
* @param {import('sequelize').DataTypes} Sequelize 
*/ 

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(32)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      role: {
        allowNull: false,
        type: Sequelize.ENUM('administrator', 'seller', 'customer')
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
