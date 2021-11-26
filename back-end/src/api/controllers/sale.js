const { StatusCodes } = require('http-status-codes');
const SaleService = require('../services/sale');

exports.create = async (req, res) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = req.body;
  try {
    const newSale = await SaleService.create({
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products });
    res.status(StatusCodes.CREATED).json({ result: newSale.id });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
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
        .send(error.message);
    }
  };
exports.getAllByUser = async (req, res) => {
  try {
    const { email, role } = req.token;
    const sales = role === 'customer'
      ? await SaleService.getOrdersByUserEmail({ email })
      : await SaleService.getOrdersBySellerEmail({ email });
    res.status(StatusCodes.OK).json({ result: sales });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
};
exports.getByID = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await SaleService.getOrderByID({ id });
    res.status(StatusCodes.OK).json({ result: order });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
};

exports.changeOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { newStatus } = req.body;
  try {
    const updatedOrder = await SaleService.changeOrderStatus({ id, newStatus });
    res.status(StatusCodes.OK).json({ result: updatedOrder });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
};
