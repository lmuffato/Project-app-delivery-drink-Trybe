const { Sale } = require('../database/models');
const { SaleProduct } = require('../database/models');

const createSaleElement = async (saleInfo) => {
  const { totalPrice, deliveryAddress, deliveryNumber, userId, sellerId } = saleInfo;
  const result = await Sale.create({
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    userId,
    sellerId,
    status: 'Pendente',
  }).catch((error) => ({ error: { message: error.message } }));
  return result;
};

const registerProductsOnSale = async (saleId, products) => {
  const { error } = products.reduce(async (_acc, product) => {
    const { productId, quantity } = product;
    const { er } = await SaleProduct.create({
      productId,
      saleId,
      quantity,
    }).catch((e) => ({ er: e.message }));
    if (er !== undefined) {
      return { error: { message: er } };
    }
  }, {});
  return { error };
};

const createSale = async (saleData) => {
  const { totalPrice, deliveryAddress, deliveryNumber, userId, sellerId, products } = saleData;
  const saleInfo = { totalPrice, deliveryAddress, deliveryNumber, userId, sellerId };
  const { dataValues, error } = await createSaleElement(saleInfo);
  if (error !== undefined) {
    return { error };
  }
  const saleId = dataValues.id;
  const { error: errorProductsInception } = await registerProductsOnSale(saleId, products);
  if (errorProductsInception !== undefined) {
    return { error: errorProductsInception };
  }
  return { saleId: dataValues.id };
};

module.exports = {
  createSale,
};