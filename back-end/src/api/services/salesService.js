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

const createSalesProducts = async (productList, saleId) => {
  productList.forEach(async (product) => {
    await salesProducts.create({ 
      [SALEID]: saleId.id,
      [PRODUCTID]: product.id,
      quantity: product.qtd,
      name: product.name,
      price: product.price,
      subTotal: product.subtotal,
    });
  });
};

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

   await createSalesProducts(productList, saleId);

  return saleId.id;
};

const getAll = async ({ userId, role }) => {
  let response;
  switch (role) {
    case 'customer':
      response = await sales.findAll({ where: { [USERID]: userId } });
      break;
    case 'seller':
      response = await sales.findAll({ where: { [SELLERID]: userId } });
      break;
    case 'administrador':
      response = await sales.findAll();
      break;  
    default:
      break;
  }
  return response;
};

    // include: [{ model: salesProducts, required: true }],

const getById = async ({ id }) => {
  const response = await sales.findOne({ where: { id }, include: ['seller', 'products'] });

  return response;
};

module.exports = {
  create,
  getAll,
  getById,
};