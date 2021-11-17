const service = require('../service');

const createSale = async (req, res) => {
  console.log(req.body);
  const sale = await service.sale(req.body);
  console.log(sale);
  res.status(201).json(sale);
};

module.exports = createSale;
