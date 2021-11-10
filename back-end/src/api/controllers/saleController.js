const { getAll, create, getAllSalesById, updateStatusSale } = require('../services/saleService');
const { getUserByEmail } = require('../services/userService');
const { OK, CREATED, INTERNAL_SERVER_ERROR } = require('../services/statusCode');
const { getSale } = require('../services/saleService');

const getAllSales = async (_req, res) => {
  const sales = await getAll();

  return res.status(OK).json(sales);
};

const createSales = async (req, res) => {
  const { email } = req.decoded;
  const { seller, ...data } = req.body;
  const User = await getUserByEmail(email);
  const sale = { ...data, userId: User.id, status: 'Pendente' };
  const saleCreated = await create(sale);

  res.status(CREATED).json(saleCreated);
};

const findSalesById = async (req, res) => {
  const { email } = req.decoded;
  const sales = await getAllSalesById(email);

  res.status(OK).json(sales);
};

const getOneSale = async (req, res) => {
  const { id } = req.params;
  const sale = await getSale(id);

  res.status(OK).json(sale);
};

const updateStatus = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  const update = await updateStatusSale(status, id);

  if (update) {
    const updated = await getSale(id);

    res.status(OK).json(updated);
  }
  
  res.status(INTERNAL_SERVER_ERROR).json({ message: 'Erro interno' });
};

module.exports = {
  getAllSales,
  createSales,
  findSalesById,
  getOneSale,
  updateStatus,
};
