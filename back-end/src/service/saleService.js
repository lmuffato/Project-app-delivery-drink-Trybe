const { Sale, User, Product, SalesProduct } = require('../database/models');

const createSale = async (
    { totalPrice, userId, sellerId, deliveryAddress, deliveryNumber, saleDate, status, products },
  ) => {
  const sale = await Sale.create(
    { totalPrice, userId, sellerId, deliveryAddress, deliveryNumber, saleDate, status, products },
  );
  // products => chamar a tabela de salesProducts conforme os 
  // "saleId": 3, "productId": 2, "quantity": 5
  
  products.map(async ({ productId, saleId, quantity }) => {
    const register = await SalesProduct.create({ productId, saleId, quantity });
    return register;
  });

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
