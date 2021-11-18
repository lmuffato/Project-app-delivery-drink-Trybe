const { Sale, User } = require('../database/models');

const createSale = async (
    { totalPrice, userId, sellerId, deliveryAddress, deliveryNumber, saleDate, status },
  ) => {
  const sale = await Sale.create(
    { totalPrice, userId, sellerId, deliveryAddress, deliveryNumber, saleDate, status },
  );
  // console.log(sale, 'service');
  return sale;
};

const getSales = async () => {
  const sales = await Sale.findAll({
    include: [
      { model: User, as: 'user_id' },
    ]
  });
  return sales;
};

module.exports = {
  createSale,
  getSales,
};
