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

module.exports = {
  addNew,
  getSale,
};
