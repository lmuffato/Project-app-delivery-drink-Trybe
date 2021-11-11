'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9,2)
      },
      deliveryAddress: {
        type: Sequelize.STRING
      },
      deliveryNumber: {
        type: Sequelize.STRING
      },
      saleDate: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          Key: 'id'
        } 
      },
      // sellerId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'users',
      //     Key: 'id'
      //   } 
      // },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};
