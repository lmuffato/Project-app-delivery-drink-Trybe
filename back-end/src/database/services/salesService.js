const { Sale, SaleProduct } = require('../models');
const { HTTP_CREATED, HTTP_CONFLICT, HTTP_OK_STATUS } = require('../../status');


async function create(body) {
  const isUserResgistered = await readByEmailService(email);
  const statusOrder = 'pendente';

  const { userId, sellerId, totalPrice, deliveryAddres, deliveryNumber, saleDate } = body;

  await Sale.create({ user_id: userId, seller_id: sellerId, total_price: totalPrice, delivery_addres: deliveryAddres, delivery_number: deliveryNumber, sale_date: new Date(), status: statusOrder });

  return { data, code: HTTP_CREATED };
};

module.exports = {
  create,
};
