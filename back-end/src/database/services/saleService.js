const { Sale, SaleProduct } = require('../models');
const { HTTP_CREATED, HTTP_CONFLICT, HTTP_OK_STATUS } = require('../../status');


async function create(body) {
  const statusOrder = 'pendente';

  const { userId, sellerId, products, totalPrice, deliveryAddres, deliveryNumber } = body;

  const newSale = await Sale.create({ user_id: userId, seller_id: sellerId, total_price: totalPrice, delivery_addres: deliveryAddres, delivery_number: deliveryNumber, sale_date: new Date(), status: statusOrder });

  products.forEach((product) => {
    const { id, quantity } = product;
    await SaleProduct.create({ sale_id: newSale.id , product_id: id, quantity: quantity });
  });

  return { code: HTTP_CREATED };
};

module.exports = {
  create,
};
