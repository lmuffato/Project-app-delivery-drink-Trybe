const { Product, Sales } = require('../database/models');
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

// ainda não implementado
const postProducts = async (data) => {
  const { delivery, product } = data;
  const { deliveryAddress, deliveryNumber } = delivery;
  const { id, total, quantity } = product;
 
  try {
    const result = await Sales.create({
      deliveryAddress, deliveryNumber, id, total, quantity, status: 'pendente' });
    if (!result) return errorMap.NotFound;
    return result;
  } catch (error) {
    return errorMap.internalError;
  }
};

module.exports = { getAll, postProducts };
