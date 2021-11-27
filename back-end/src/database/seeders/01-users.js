'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [
        {
          email: "adm@deliveryapp.com",
          id: 1,
          name: "Delivery App Admin",
          password: "a4c86edecc5aee06eff8fdeda69e0d04",
          role: "administrator",
        },
        {
          email: "fulana@deliveryapp.com",
          id: 2,
          name: "Fulana Pereira",
          password: "3c28d2b0881bf46457a853e0b07531c6",
          role: "seller",
        },
        {
          email: "zebirita@email.com",
          id: 3,
          name: "Cliente Zé Birita",
          password: "1c37466c159755ce1fa181bd247cb925",
          role: "customer",
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};

/*

Antes de executar a seed, é necessáiro ter feito a criação
do arquivo de seed pelo comando:

npx sequelize seed:generate --name Users

Para executar o povoamento no banco de dados, execute o comando abaixo:

npx sequelize db:seed:all

para desfazer o povoamento, execute o comando abaixo:

npx sequelize db:seed:undo:all

*/
