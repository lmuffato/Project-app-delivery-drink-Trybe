'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
    [{
      id: 1,
      user_id: 3,
      seller_id: 2, 
      total_price: "0.5", 
      delivery_address: "São Paulo", 
      delivery_number: "123456", 
      sale_date: "2021/12/01", 
      status: "em andamento"
    },
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};

