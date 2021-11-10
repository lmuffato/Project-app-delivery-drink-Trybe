module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      totalPrice: {
        allowNull: false,
        field: 'total_price',
        type: Sequelize.DECIMAL(9, 2),
      },
      deliveryAddress: {
        allowNull: false,
        field: 'delivery_address',
        type: Sequelize.STRING(100),
      },
      deliveryNumber: {
        allowNull: false,
        field: 'delivery_number',
        type: Sequelize.STRING(50),
      },
      saleDate: {
        allowNull: false,
        field: 'sale_date',
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'seller_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('sales');
  },
};
