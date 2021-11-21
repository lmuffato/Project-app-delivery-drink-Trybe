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
        {
          name: "Ciro Bottini",
          id: 4,
          password: "25d55ad283aa400af464c76d713c07ad",
          email: "cirobottini@gmail.com",
          role: "seller"
        },
        {
          id: 5,
          name: "Socrates",
          password: "25d55ad283aa400af464c76d713c07ad",
          email: "socrates@gmail.com",
          role: "seller"
        },
        {
          id: 6,
          name: "Pitagoras",
          password: "25d55ad283aa400af464c76d713c07ad",
          email: "pitagoras@gmail.com",
          role: "seller"
        },
        {
          id: 7,
          name: "Aristoteles",
          password: "25d55ad283aa400af464c76d713c07ad",
          email: "aristoteles@gmail.com",
          role: "seller"
        },
        {
          id: 8,
          name: "Friedrich Nietzsche",
          password: "25d55ad283aa400af464c76d713c07ad",
          email: "platao@gmail.com",
          role: "customer"
        },
        {
          id: 9,
          name: "Confúcio",
          password: "25d55ad283aa400af464c76d713c07ad",
          email: "Confucio@gmail.com",
          role: "customer"
        },
        {
          id: 10,
          name: "customer",
          password: "25d55ad283aa400af464c76d713c07ad",
          email: "customer@gmail.com",
          role: "customer"
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
