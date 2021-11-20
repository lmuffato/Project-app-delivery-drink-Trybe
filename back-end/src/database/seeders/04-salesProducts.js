'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('salesProducts',
      [
        {
          quantity: 10,
          sale_id: 1,
          product_id: 1
        },
        {
          quantity: 20,
          sale_id: 2,
          product_id: 1
        },
        {
          quantity: 10,
          sale_id: 3,
          product_id: 1
        },
        {
          quantity: 10,
          sale_id: 4,
          product_id: 1
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  },
};

/*

Antes de executar a seed, é necessáiro ter feito a criação
do arquivo de seed pelo comando:

npx sequelize seed:generate --name Categories

Para executar o povoamento no banco de dados, execute o comando abaixo:

npx sequelize db:seed:all

para desfazer o povoamento, execute o comando abaixo:

npx sequelize db:seed:undo:all

*/
