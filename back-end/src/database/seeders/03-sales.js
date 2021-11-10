'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [
        {
          id: 1,
          user_id: 1,
          seller_id: 1,
          total_price: 2.99,
          delivery_address: 'Rua A',
          status: 'entrege',
        },
        {
          id: 2,
          user_id: 1,
          seller_id: 2,
          total_price: 1.99,
          delivery_address: 'Rua B',
          status: 'entrege',
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};

/*

Antes de executar a seed, é necessáiro ter feito a criação
do arquivo de seed pelo comando:

npx sequelize seed:generate --name BlogPosts

Para executar o povoamento no banco de dados, execute o comando abaixo:

npx sequelize db:seed:all

para desfazer o povoamento, execute o comando abaixo:

npx sequelize db:seed:undo:all

*/
