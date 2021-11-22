'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      saleId: {
        type: Sequelize.INTEGER,
        references: { model: 'sales', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'sale_id',
        foreignKey: true,
      },
      productId: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'product_id',
        foreignKey: true,
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      //   defaultValue: Sequelize.NOW
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      //   defaultValue: Sequelize.NOW
      // }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  }
};
