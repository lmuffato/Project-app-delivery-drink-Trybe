
'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [
        {
          user_id: 2,
          seller_id: 2,
          total_price: 10.50,
          delivery_address: "Rua A",
          delivery_number: 100,
          status: "Pendente"
        },
        {
          user_id: 1,
          seller_id: 2,
          total_price: 90.50,
          delivery_address: "Rua B",
          delivery_number: 200,
          status: "Preparando"
        },
        {
          user_id: 2,
          seller_id: 2,
          total_price: 500,
          delivery_address: "Rua C",
          delivery_number: 300,
          status: "Em Trânsito"
        },
        {
          user_id: 2,
          seller_id: 2,
          total_price: 500,
          delivery_address: "Rua D",
          delivery_number: 400,
          status: "Entregue"
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
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
