const { sales, sales_products } = require('../../database/models');
require('dotenv').config();

const create = async ({ userId, sellerId, totalPrice, deliveryAddress,
  deliveryNumber, productList }) => {
  const saleId = await sales.create({ 
    // eslint-disable-next-line camelcase
    user_id: userId,
    // eslint-disable-next-line camelcase
    seller_id: sellerId,
    // eslint-disable-next-line camelcase
    total_price: totalPrice,
    // eslint-disable-next-line camelcase
    delivery_address: deliveryAddress,
    // eslint-disable-next-line camelcase
    delivery_number: deliveryNumber,
    // eslint-disable-next-line camelcase
    sale_date: Date.now(),
    status: 'Pendente',
   });

   productList.forEach(async (product) => {
    // eslint-disable-next-line camelcase
    await sales_products.create({ 
      // eslint-disable-next-line camelcase
      sale_id: saleId.id,
      // eslint-disable-next-line camelcase
      product_id: product.id,
      quantity: product.qtd,
    });
  });

  return saleId.id;
};

module.exports = {
  create,
};