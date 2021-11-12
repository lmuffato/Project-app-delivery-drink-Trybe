const { Product, Sales, SalesProduct } = require('../database/models');
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
const postProducts = async (data, user) => {
  const { delivery, shoppingCart, total } = data;
  const { deliveryAddress, deliveryNumber } = delivery;

  const { id, email, role } = user;
  const { quant } = shoppingCart;
  
    const result = await Sales.create({
      userId: id, totalPrice: total, deliveryAddress, deliveryNumber, status: 'pendente' });
      console.log(result);

    // const result2 = awair SalesProduct.insertOne({where: { saleId:  }})
  // try {
  //   if (!result) return errorMap.NotFound;
  //   return result;
  // } catch (error) {
  //   return errorMap.internalError;
  // }
};

module.exports = { getAll, postProducts };
