const { sales, salesProducts } = require('../../database/models');
require('dotenv').config();

const USERID = 'user_id';
const SELLERID = 'seller_id';
const TOTALPRICE = 'total_price';
const DELIVERYADDRESS = 'delivery_address';
const DELIVERYNUMBER = 'delivery_number';
const SALEDATE = 'sale_date';
const SALEID = 'sale_id';
const PRODUCTID = 'product_id';

const create = async ({ userId, sellerId, totalPrice, deliveryAddress,
  deliveryNumber, productList }) => {
  const saleId = await sales.create({ 
    [USERID]: userId,
    [SELLERID]: sellerId,
    [TOTALPRICE]: totalPrice,
    [DELIVERYADDRESS]: deliveryAddress,
    [DELIVERYNUMBER]: deliveryNumber,
    [SALEDATE]: Date.now(),
    status: 'Pendente',
   });

   productList.forEach(async (product) => {
    await salesProducts.create({ 
      [SALEID]: saleId.id,
      [PRODUCTID]: product.id,
      quantity: product.qtd,
    });
  });

  return saleId.id;
};

module.exports = {
  create,
};