'use strict';
module.exports = {
    /**
* 
* @param {import('sequelize').QueryInterface} queryInterface 
* @param {import('sequelize').DataTypes} Sequelize 
*/ 

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(4,2)
      },
      url_image: {
        allowNull: false,
        type: Sequelize.STRING
      },
      onUpdate: Sequelize.DATE,
      onDelete: Sequelize.DATE
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
