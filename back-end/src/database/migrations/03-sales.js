"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        foreignKey: true,
      },
      // seller_id: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "sales",
      //     key: "id",
      //   },
      //   onUpdate: "CASCADE",
      //   onDelete: "CASCADE",
      //   foreignKey: true,
      // },
      total_price: {
        type: Sequelize.DECIMAL(9,2),
      },
      delivery_address: {
        type: Sequelize.STRING,
      },
      delivery_number: {
        type: Sequelize.STRING,
      },
      sale_date: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      status: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("sales");
  },
};
