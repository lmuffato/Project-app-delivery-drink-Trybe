const { sale, user, product } = require('../database/models/index');
const salesProductService = require('./saleProductService');

const createSale = async (data) => {
  const { cart } = data;
  const newSale = await sale.create(data);
  salesProductService.createSalesProduct(cart, newSale.id);
  return { status: 201, id: newSale.id };
};

const getAllSales = async (id) => {
  const userId = 'user_Id';
  const query = { where: { [userId]: id } };

  const allSales = await sale.findAll(query);
  return allSales;
};

const getProductsOfSale = async (saleId) => {
    const fetchSale = await sale.findByPk(saleId, {
      include: [
        { model: user, as: 'seller', attributes: { exclude: ['password'] } },
        { model: product, as: 'products', through: { attributes: ['quantity'] } }, 
      ],
    });
  
    return { status: 200, data: fetchSale };
  };

module.exports = {
  createSale,
  getAllSales,
  getProductsOfSale,
};
