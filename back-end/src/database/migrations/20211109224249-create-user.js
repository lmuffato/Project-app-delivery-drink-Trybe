"use strict";
module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').DataTypes} Sequelize
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      role: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
