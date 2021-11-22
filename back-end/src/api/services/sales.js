const { Sale } = require('../../database/models');
const serviceUser = require('./user');

const getAllSale = async () => {
  const sales = await Sale.findAll();
  return { status: 200, data: sales };
};

const createSale = async ({
  sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
}, email) => {
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
  
  return { statusCode: 201, data: sale }; // talvez tenha que alterar a resposta de "data"
  // return { statusCode: 201, data: { message: 'pedido realizado com sucesso' } };
};

const getById = async (id) => {
  const sale = await Sale.findByPk(id);
  console.log('SALEBYID NO SERVICE =>', sale);
  return { status: 200, data: sale };
};

module.exports = {
  getAllSale,
  createSale,
  getById,
};
