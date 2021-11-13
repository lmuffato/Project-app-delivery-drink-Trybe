const { Sale, SaleProduct } = require('../database/models');
const errorMap = require('../utils/errorMap');

const postSale = async (data, user) => {
  try {
    const { delivery, shoppingCart, total, sellerId } = data;
    const { deliveryAddress, deliveryNumber } = delivery;
    const arrSales = Object.entries(shoppingCart);
    
    const { dataValues: { id } } = await Sale.create({
      userId: user.id,
      sellerId,
      totalPrice: total,
      deliveryAddress,
      deliveryNumber,
      status: 'pendente' });
  
    arrSales.forEach(async (currSale) => SaleProduct.create(
      { saleId: id, productId: currSale[0], quantity: currSale[1] },
    ));
  
    return { id };
  } catch (error) {
    return errorMap.internalError;
  }
};

module.exports = { postSale };
