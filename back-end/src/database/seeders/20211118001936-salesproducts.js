'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('salesProducts',
    [{
      sale_id: 1,
      product_id: 2,
      quantity: 6,
    },
    {
      sale_id: 2,
      product_id: 6,
      quantity: 9,
    },
    {
      sale_id: 3,
      product_id: 10,
      quantity: 12,
    },
    ], {
      tableName: 'salesProducts',
      timestamps: false,
      underscored: true
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  }
};

