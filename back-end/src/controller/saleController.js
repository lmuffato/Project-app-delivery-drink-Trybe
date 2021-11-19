const { saleService } = require('../service');

const createSale = async (req, res) => {
  try {
    const dataSales = req.body;
    const Sale = await saleService.createSale(dataSales);
    return res.status(201).json(Sale);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const getSales = async (_req, res) => {
  try {
    const sales = await saleService.getSales();
    return res.status(200).json(sales);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const getSale = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await saleService.getSale(id);
    if (sale.message) {
      return res.status(sale.code).json({ message: sale.message });
    }
    return res.status(200).json(sale);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedSale = await saleService.updateStatus(status, id);
    return res.status(200).json(updatedSale);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  createSale,
  getSales,
  getSale,
  updateStatus,
};
