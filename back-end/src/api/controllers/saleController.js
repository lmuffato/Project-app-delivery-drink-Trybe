const { UNAUTHORIZED_SEARCH } = require('../messages/errorMessages');
const { saleService } = require('../services');

const registerSale = async (req, res) => {
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = req.body;
  const { id } = req.user;

  const saleData = { userId: id, sellerId, totalPrice, deliveryAddress, deliveryNumber, products };

  const newSale = await saleService.registerSale(saleData);

  return res.status(201).json(newSale);
};

const getOrdersByUserId = async (req, res) => {
  const { id } = req.params;
  const { id: tokenUserId } = req.user;

  if (+id !== tokenUserId) {
    return res.status(401).send({ error: UNAUTHORIZED_SEARCH });
  }
  
  const { status, data, ordersData } = await saleService.getOrdersByUserId(id);

  if (status) {
    return res.status(status).json({ error: data });
  }

  res.status(200).json(ordersData);
};

const getAllOrders = async (_req, res) => {
  const allOrders = await saleService.getAllOrders();

  res.status(200).json(allOrders);
};

const getOrdersBySellerId = async (req, res) => {
  const { id } = req.params;
  console.log(req.user);

  const { status, data, ordersData } = await saleService.getOrdersBySellerId(id);

  if (status) {
    return res.status(status).json({ error: data });
  }

  res.status(200).json(ordersData);
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const updatedOrder = await saleService.updateOrder(id, status);

  return res.status(200).json(updatedOrder);
};

module.exports = {
  registerSale,
  getOrdersByUserId,
  getAllOrders,
  getOrdersBySellerId,
  updateOrder,
};