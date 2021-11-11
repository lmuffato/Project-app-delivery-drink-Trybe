'use strict';
module.exports = {
  /**
* 
* @param {import('sequelize').QueryInterface} queryInterface 
* @param {import('sequelize').DataTypes} Sequelize 
*/ 
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      seller_id: {
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,2),
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sale_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        defaultValue: 'Pendente',
        type: Sequelize.ENUM('Pendente', 'Preparando', 'Em Trânsito', 'Entregue'),
      },
      role: {
        allowNull: false,
        type: Sequelize.ENUM('administrator', 'seller', 'customer')
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sales');
  }
};
