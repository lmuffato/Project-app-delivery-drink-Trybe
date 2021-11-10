const { sales, salesProducts, user, products: Products } = require('../../database/models');
const { getUserByEmail } = require('./userService');

const getAll = async () => {
  try {
    const allSales = await sales.findAll();

    return allSales;
  } catch (error) {
    return error.message;
  }
};

const getAllSalesById = async (email) => {
  const { id } = await getUserByEmail(email);
  const sellerSales = await sales.findAll({ where: { sellerId: id } });

  return sellerSales;
};

const create = async (sale) => {
  try {
    const { products, sellerId, ...data } = sale;
    const newSale = await sales.create({ sellerId, ...data });
    products.forEach(({ qtd, id }) => salesProducts.create({ saleId: newSale.id, productId: id, quantity: qtd }));

    return newSale;
  } catch (error) {
    return error.message;
  }
};
const getSale = async (id) => {
  const sale = await sales.findOne({
    where: { id },
    include: [
      { model: user, as: 'user', attributes: ['name'] },
      { model: user, as: 'seller', attributes: ['name'] },
      { model: Products, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });

  if (!sale) return { message: 'Usuário não encontrado' };

  return sale;
};

const updateStatusSale = async (status, id) => {
  try {
    const updatedSale = await sales.update({ status }, { where: { id } });
    
    return updatedSale;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAll,
  create,
  getAllSalesById,
  getSale,
  updateStatusSale,
};
