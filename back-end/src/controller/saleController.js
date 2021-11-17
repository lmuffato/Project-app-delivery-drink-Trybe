const service = require('../service');

const createSale = async (req, res) => {
  const dataSales = req.body;
  const sale = await service.sale(dataSales);
  console.log(sale);
  res.status(201).json(sale);
};

module.exports = createSale;
