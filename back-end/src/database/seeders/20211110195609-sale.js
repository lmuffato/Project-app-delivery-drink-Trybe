'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

/* module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        "total_price": "150",
        "delivery_address": "Rua Antonio",
        "delivery_number": "10",
        "sale_date": new Date('2011-08-01T19:58:00.000Z'),
        "status": "Pendente",
        "user_id": 3,
        "seller_id": 2
      },
      {
        "total_price": "50",
        "delivery_address": "Rua Francisco Antonio",
        "delivery_number": "22",
        "sale_date": new Date('2011-08-01T19:58:00.000Z'),
        "status": "Preparando",
        "user_id": 3,
        "seller_id": 2
      },
      {
        "total_price": "244",
        "delivery_address": "Rua João Branco",
        "delivery_number": "160",
        "sale_date": new Date('2011-08-01T19:58:00.000Z'),
        "status": "Entregue",
        "user_id": 3,
        "seller_id": 2
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
 */
