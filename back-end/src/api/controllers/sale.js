const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const SaleService = require('../services/sale');

exports.create = async (req, res) => {
  const { userName, sellerName, totalPrice, deliveryAddress, deliveryNumber, products } = req.body;
  try {
    const newSale = await SaleService.create({
      userName, sellerName, totalPrice, deliveryAddress, deliveryNumber, products });
    res.status(StatusCodes.CREATED).json({ result: newSale.id });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};

exports.getAllDebug = async (_req, res) => {
    try {
      const sales = await SaleService.findAll();
      res.status(StatusCodes.OK).json({ result: sales });
    } catch (error) {
      console.error(error);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };
exports.getAllByUser = async (req, res) => {
  try {
    const sales = await SaleService
      .getOrdersByUserEmail({ email: req.parsedTokenEmail });
    res.status(StatusCodes.OK).json({ result: sales });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};
