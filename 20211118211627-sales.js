'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('sales',
    [
      {
        user_id: 1,
        seller_id: 1,
        total_price: 25.50,
        delivery_address: 'jfaofasdlkfjalsfjalsçdfç',
        delivery_number: '465',
        sale_date: new Date(),
        status: 'Pendente',
      },
      {
        user_id: 1,
        seller_id: 1,
        total_price: 30.50,
        delivery_address: 'aaaaaaaaaaaa',
        delivery_number: '88',
        sale_date: new Date(),
        status: 'Pendente',
      },
      {
        user_id: 1,
        seller_id: 1,
        total_price: 28.00,
        delivery_address: 'zzzzzç',
        delivery_number: '63',
        sale_date: new Date(),
        status: 'Pendente',
      },], {}),

  down: async (queryInterface, Sequelize) => await queryInterface.bulkDelete('sales', null, {}),
};
