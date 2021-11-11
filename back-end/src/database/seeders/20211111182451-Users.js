"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Delivery App Admin",
          email: "adm@deliveryapp.com",
          role: "administrator",
          password: "a4c86edecc5aee06eff8fdeda69e0d04",
        },
        {
          name: "Fulana Pereira",
          email: "fulana@deliveryapp.com",
          role: "seller",
          password: "a4c86edecc5aee06eff8fdeda69e0d04",
        },
        {
          name: "Cliente Zé Birita",
          email: "zebirita@email.com",
          role: "customer",
          password: "a4c86edecc5aee06eff8fdeda69e0d04",
        },
      ],
      {}
    ),

  down: async (queryInterface) => queryInterface.bulkDelete("users", null, {}),
};
