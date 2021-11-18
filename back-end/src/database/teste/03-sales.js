'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales', []);
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
