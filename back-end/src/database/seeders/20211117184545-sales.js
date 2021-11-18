// 'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
    [{
      id: 1,
      user_id: 3,
      seller_id: 2, 
      total_price: 29.3, 
      delivery_address: "Rua T 15 - Taquaralto - TO", 
      delivery_number: "712", 
      sale_date: "2021/12/01", 
      status: "em andamento"
    },
    {
      id: 2,
      user_id: 4,
      seller_id: 2, 
      total_price: 51.3, 
      delivery_address: "Rua J 3", 
      delivery_number: "828", 
      sale_date: "2021/12/02", 
      status: "pendente"
    },
    {
      id: 3,
      user_id: 5,
      seller_id: 2, 
      total_price: 91.2, 
      delivery_address: "Avenida Marechal Rondon - MG", 
      delivery_number: "472", 
      sale_date: "2021/12/03", 
      status: "concluido"
    },
    ], {
      tableName: 'sales',
      timestamps: false,
      underscored: true
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};

