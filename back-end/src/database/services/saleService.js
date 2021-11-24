const { Sale, SalesProducts, Product } = require('../models');
const { HTTP_CREATED, HTTP_CONFLICT, HTTP_OK_STATUS, HTTP_NOT_FOUND } = require('../../status');


async function create(body) {
  const statusOrder = 'pendente';
  
  const { userId, sellerId, products, totalPrice, deliveryAddress, deliveryNumber } = body;

  const saleId = await Sale.create({ user_id: userId, seller_id: sellerId, total_price: totalPrice, delivery_address: deliveryAddress, delivery_number: deliveryNumber, sale_date: new Date(), status: statusOrder });

  products.forEach(async (product) => {
    const { id, quantity } = product;

    await SalesProducts.create({ sale_id: saleId.dataValues.id , product_id: id, quantity: quantity })
  });

  return { data: saleId.dataValues.id, code: HTTP_CREATED };
};

async function getByUserId(id) {
  const order = await Sale.findAll({
    where: { user_id: id },
    include: [
      { model: Product, as:'products', through: { attributes: ['quantity'], as: 'quantityTotal' } },
    ],
  });

  if (order.length <= 0) return { code: HTTP_NOT_FOUND, error: 'Sale does not exist' };

  return { data: order, code: HTTP_OK_STATUS };
};

async function getByOrderId(id) {
  const order = await Sale.findOne({
    where: { id },
    include: [
      { model: Product, as:'products', through: { attributes: ['quantity'], as: 'quantityTotal' } },
    ],
  });

  if (!order) return { code: HTTP_NOT_FOUND, error: 'Sale does not exist' };

  return { data: order, code: HTTP_OK_STATUS };
}

async function updateStatusService(id, status) {
   await Sale.update({ status }, { where: { id } });

  return { statusUpdated: true, code: HTTP_OK_STATUS };
}

module.exports = {
  create,
  getByUserId,
  getByOrderId,
  updateStatusService
};
