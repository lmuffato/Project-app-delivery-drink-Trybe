module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        "total_price": "150",
        "delivery_address": "Rua Antonio",
        "delivery_number": "10",
        "sale_date": new Date('2011-08-01T19:58:00.000Z'),
        "status": "pendente",
        "user_id": 3,
        "seller_id": 2
      },
      {
        "total_price": "50",
        "delivery_address": "Rua Francisco Antonio",
        "delivery_number": "22",
        "sale_date": new Date('2011-08-01T19:58:00.000Z'),
        "status": "preparando",
        "user_id": 3,
        "seller_id": 2
      },
      {
        "total_price": "244",
        "delivery_address": "Rua João Branco",
        "delivery_number": "160",
        "sale_date": new Date('2011-08-01T19:58:00.000Z'),
        "status": "entregue",
        "user_id": 3,
        "seller_id": 2
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
