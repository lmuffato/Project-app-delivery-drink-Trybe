'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
    [{
      id: 1,
      user_id: 3,
      seller_id: 1,
      total_price: 12.90,
      delivery_address: 'Rua São Paulo - São Paulo',
      delivery_number: 123, 
      sale_date: 17/11/2021,
      status: 'Pendente'
    },
    {
      id: 2,
      user_id: 3,
      seller_id: 1,
      total_price: 20.90,
      delivery_address: 'Rua Rio de Janeiro - Rio de Janeiro',
      delivery_number: 456, 
      sale_date: 17/11/2021,
      status: 'Em andamento'
    }
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
