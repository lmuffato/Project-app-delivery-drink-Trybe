const Sale = require('../services/Sales');

const addNew = async (req, res) => {
  const { orders, ...data } = req.body;

  const { err, sale } = await Sale.addNew(orders, data);

  console.log(err);

  if (err) return res.status(500).json({ error: err.message });

  res.status(201).json({ result: sale });
};

module.exports = {
  addNew,
};
