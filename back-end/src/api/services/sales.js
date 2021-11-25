/* eslint-disable prefer-object-spread */
const { Sale, User, Product, SaleProduct } = require('../../database/models');
const serviceUser = require('./user');

const getAllSale = async () => {
  const sales = await Sale.findAll();
  return { status: 200, data: sales };
};

const createSale = async ({
  sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
}, email, putItem) => {
  const { id: customerId } = await serviceUser.findByIdRole(email, 'customer');
  const sale = await Sale.create({
    userId: customerId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: new Date(),
    status,
  });
  JSON.parse(putItem).forEach(async ({ id, quantity }) => {
    await SaleProduct.create({ saleId: sale.id, productId: id, quantity });
  });
  return { statusCode: 201, data: sale };
};

const getById = async (id) => {
  const sale = await Sale.findByPk(id, {
    include: [
      { model: User, as: 'seller', attributes: { exclude: ['password'] } },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } }, 
    ],
  });
  return { status: 200, data: sale };
};

const update = async (id, status) => {
  await Sale.update({ status }, { where: { id } });
  const sale = await getById(id);
  return { statusCode: 200, data: sale };
};

module.exports = {
  getAllSale,
  createSale,
  getById,
  update,
};
