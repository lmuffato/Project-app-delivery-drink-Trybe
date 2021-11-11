'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name:{
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      email:{
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      password:{
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      role:{
        allowNull: false,
        type: Sequelize.STRING(30),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
