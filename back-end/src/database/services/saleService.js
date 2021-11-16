const { Sale, SalesProducts } = require('../models');
const { HTTP_CREATED, HTTP_CONFLICT, HTTP_OK_STATUS } = require('../../status');


async function create(body) {
  const statusOrder = 'pendente';
  
  const { userId, sellerId, products, totalPrice, deliveryAddress, deliveryNumber } = body;

  const saleId = await Sale.create({ user_id: userId, seller_id: sellerId, total_price: totalPrice, delivery_address: deliveryAddress, delivery_number: deliveryNumber, sale_date: new Date(), status: statusOrder });

  console.log('Chegou aqui! service', products);

  products.forEach(async (product) => {
    const { id, quantity } = product;
    console.log(id, quantity, 'Dentro do each');

    await SalesProducts.create({ sale_id: saleId.dataValues.id , product_id: id, quantity: quantity })
  });

  return { code: HTTP_CREATED };
};

module.exports = {
  create,
};
