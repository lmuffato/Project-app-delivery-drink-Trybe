const { Sale } = require('../database/models');

const createSale = async (totalPrice, userId, sellerId, deliveryAddress,  deliveryNumber, saleDate, status ) => {
  const sale = await Sale.create({ totalPrice, userId, sellerId, deliveryAddress,  deliveryNumber, saleDate, status });
  console.log(sale, 'service')
  return sale;
};

module.exports = createSale;
