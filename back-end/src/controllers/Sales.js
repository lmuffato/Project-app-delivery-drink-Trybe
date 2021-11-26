const Sale = require('../services/Sales');

const getSale = async (req, res) => {
  const { id } = req.headers;
  const sale = await Sale.getSale(id);
  res.status(200).json(sale);
};

const addNew = async (req, res) => {
  const { orders, ...data } = req.body;

  const { err, sale } = await Sale.addNew(orders, data);

  if (err) return res.status(500).json({ error: err.message });

  res.status(201).json({ result: sale });
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await Sale.getSaleById(id);
  res.status(200).json(sale);
};

const getSaleDetails = async (req, res) => {
  const { id } = req.params;
  const sale = await Sale.getSaleDetails(id);
  res.status(200).json(sale);
};

const changeStatus = async (req, res) => {
  const { id } = req.params;
  await Sale.changeStatus(id);
  res.status(200);
};

const getSalesBySellerId = async (req, res) => {
  const { id } = req.headers;
  const salesList = await Sale.getSalesBySellerId(id);
  res.status(200).json(salesList);
};

module.exports = {
  addNew,
  getSale,
  getSaleById,
  getSaleDetails,
  changeStatus,
  getSalesBySellerId,
};
