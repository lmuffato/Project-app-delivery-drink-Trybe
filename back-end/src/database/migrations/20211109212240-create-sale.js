"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sales", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "user_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        defaultValue: 1,
        references: {
          model: "users",
          Key: "id",
        },
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "seller_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        defaultValue: 1,
        references: {
          model: "users",
          Key: "id",
        },
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
        field: "total_price",
      },
      deliveryAddress: {
        type: Sequelize.STRING(100),
        field: "delivery_address",
      },
      deliveryNumber: {
        type: Sequelize.STRING(50),
        field: "delivery_number",
      },
      saleDate: {
        type: Sequelize.DATE,
        field: "sale_date",
      },
      status: {
        type: Sequelize.STRING(50),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("sales");
  },
};
