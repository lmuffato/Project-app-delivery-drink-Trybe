const { Sale, User, Product, SalesProduct } = require('../database/models');

const findUser = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const findProduct = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};

const createSale = async (
    { totalPrice, userId, sellerId, deliveryAddress, deliveryNumber, saleDate, status, products },
  ) => {
  if (!await findUser(userId)) {
    return { code: 400, message: 'id de usuário inválido' };
  }
  
  if (!await findProduct(products[0].productId)) {
    return { code: 400, message: 'produdo inválido' };
  }

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

const getSale = async (id) => {
  const sales = await Sale.findByPk(id, {
    include: [
      { model: User, as: 'user_id', attributes: { exclude: ['password'] } },
      { model: Product, as: 'product', though: { attributes: [] } },
    ],
  });
  return sales;
};

const updateStatus = async (status, id) => {
  await Sale.update({ status }, { where: { id } });
  const saleUpdated = await getSale(id);
  return saleUpdated;
};

module.exports = {
  createSale,
  getSales,
  getSale,
  updateStatus,
};
