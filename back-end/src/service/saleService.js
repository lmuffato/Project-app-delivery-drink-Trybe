const { Sale, User, Product, SalesProduct } = require('../database/models');

const createSale = async (
    { totalPrice, userId, sellerId, deliveryAddress, deliveryNumber, saleDate, status, products },
  ) => {
  const sale = await Sale.create(
    { totalPrice, userId, sellerId, deliveryAddress, deliveryNumber, saleDate, status, products },
  );
  
  const saleId = sale.id;
  // função responsável por alimentar a tabela intermediária 'salesProduct'
  const saleProduct = products.map(async ({ productId, quantity }) => {
    const register = await SalesProduct.create({ productId, saleId, quantity });
    return register;
  });

  await Promise.all(saleProduct);

  return sale;
};

const getSales = async () => {
  const sales = await Sale.findAll({
    include: [
      { model: User, as: 'user_id', attributes: { exclude: ['password'] } },
      { model: Product, as: 'product', though: { attributes: [] } },
    ],
  });
  return sales;
};

module.exports = {
  createSale,
  getSales,
};
