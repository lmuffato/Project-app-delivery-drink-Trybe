'use strict';

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  up: (queryInterface) => queryInterface.bulkInsert('sales',
    [
      { id: 1,
        user_id: 3,
        seller_id: 2,
        total_price: 23.80,
        status: 'Pendente',
        sale_date: '08/04/21',
        delivery_adress: 'Rua Irmãos Monteiro, Bairro Pedras',
        delivery_number: '851'
      },
      { id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 14.20,
        status: 'Preparando',
        sale_date: '08/04/21',
        delivery_adress: 'Rua Vila Bela, Bairro Gurupi',
        delivery_number: '670'
      },
      { id: 3,
        user_id: 3,
        seller_id: 2,
        total_price: 28.46,
        status: 'Entregue',
        sale_date: '07/04/21',
        delivery_adress: 'Rua Sessenta e Dois, Bairro Maranguape II',
        delivery_number: '533'
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('sales', null, {}),
};
