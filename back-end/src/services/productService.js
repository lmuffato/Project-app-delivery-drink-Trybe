const { Product, Sale, SaleProduct } = require('../database/models');
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

const postProducts = async (data, user) => {
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
};

module.exports = { getAll, postProducts };
