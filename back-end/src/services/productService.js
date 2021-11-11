const { Product } = require('../database/models');
const errorMap = require('../utils/errorMap');

const getAll = async () => {
  try {
    const result = await Product.findAll({});
    if (!result) return errorMap.NotFound;
    
    return { result };
  } catch (error) {
    return errorMap.internalError;
  }
};

const postProducts = async () => {
  // const {
  //   userId, sellerId, deliveryAddress, deliveryNumber, products } = data;
  //   products [{ productId: as61a65s, quantidade: 3 }, { productId: as61a65s, quantidade: 3 }]
  //   status = 'pendente'
  // try {
  //   const result = await Sales.create({
  //     userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status: 'pendente',
  //   if (!result) return errorMap.NotFound;
    
  // });
  //   return { result };
  // } catch (error) {
  //   return errorMap.internalError;
  // }
};

module.exports = { getAll, postProducts };
