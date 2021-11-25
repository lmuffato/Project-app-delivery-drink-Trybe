const { sale, user, product } = require('../database/models/index');
const salesProductService = require('./saleProductService');

const createSale = async (data) => {
  const { cart } = data;
  const newSale = await sale.create(data);
  salesProductService.createSalesProduct(cart, newSale.id);
  return { status: 201, id: newSale.id };
};

const getSales = async () => {
  const sales = await sale.findAll();
  return { status: 200, data: sales };
};

const getAllSales = async (id) => {
  const userId = 'user_Id';
  const query = { where: { [userId]: id } };

  const allSales = await sale.findAll(query);
  return allSales;
};

const setSaleStatus = async (id, status) => {
  const updateSale = await sale.update(
    { status },
    { where: { id } },
  );
  return updateSale;
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
  getSales,
  getAllSales,
  setSaleStatus,
  getProductsOfSale,
};
