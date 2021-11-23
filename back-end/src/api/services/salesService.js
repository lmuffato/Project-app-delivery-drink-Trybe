/* eslint-disable camelcase */
const { sales, sales_products } = require('../../database/models');
require('dotenv').config();

const create = async ({ userId, sellerId, totalPrice, deliveryAddress,
  deliveryNumber, productList }) => {
  const saleId = await sales.create({ 
    user_id: userId,
    seller_id: sellerId,
    total_price: totalPrice,
    delivery_address: deliveryAddress,
    delivery_number: deliveryNumber,
    sale_date: Date.now(),
    status: 'Pendente',
   });

   productList.forEach(async (product) => {
    await sales_products.create({ 
      sale_id: saleId.id,
      product_id: product.id,
      quantity: product.qtd,
    });
  });

  return saleId.id;
};

module.exports = {
  create,
};