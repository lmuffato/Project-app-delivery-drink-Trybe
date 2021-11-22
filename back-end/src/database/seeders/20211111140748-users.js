'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => { 
    await queryInterface.bulkInsert('users',
    [{
      id: 1,
      name: 'Delivery App Admin',
      email: 'adm@deliveryapp.com',
      password: 'a4c86edecc5aee06eff8fdeda69e0d04',
      role: 'administrator',
    },
    {
      id: 2,
      name: 'Fulana Pereira',
      email: 'fulana@deliveryapp.com',
      password: '3c28d2b0881bf46457a853e0b07531c6',
      role: 'seller',
    },
    {
      id: 3,
      name: 'Cliente Zé Birita',
      email: 'zebirita@email.com',
      password: '1c37466c159755ce1fa181bd247cb925',
      role: 'customer',
    },
    // https://www.4devs.com.br/gerador_de_pessoas   
    {
      id: 4,
      name: 'Bruno Renan da Luz',
      email: 'brunorenandaluz@email.com.br',
      password: 'C3UkymZebj',
      role: 'customer',
    },
    {
      id: 5,
      name: 'Priscila Manuela Nunes',
      email: 'priscilamanuelanunes@gmail.com',
      password: 'N0UnSTJbt2',
      role: 'customer',
    },
  ], {
    timestamps: false,
    tableName: 'users',
  });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
