const rescue = require('express-rescue');
const orderServices = require('../services/orderService');
const success = require('../utils/success');

const createOrder = rescue(async (req, res, _next) => {
  const userId = req.dataUser.id;
  const salesDate = Date.now();
  const status = 'Pendente';
  const { data, stateCart } = req.body;
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber } = data;
  const result = await orderServices.createOrder({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, salesDate, stateCart, status });

  res.status(success.Created).json({ newOrder: result });
});

const getAllOrdersByUserId = rescue(async (req, res, next) => {
  const { id } = req.dataUser;
  const result = await orderServices.getAllOrdersByUserId(id);

  if (result.error) return next(result);

  res.status(success.OK).json({ orders: result });
});

const getAllOrdersBySellerId = rescue(async (req, res, next) => {
  const { id } = req.dataUser;
  const result = await orderServices.getAllOrdersBySellerId(id);

  if (result.error) return next(result);

  res.status(success.OK).json({ orders: result });
});

const getOrdersByUserById = rescue(async (req, res, next) => {
  const { orderId } = req.params;
  const { id } = req.dataUser;
  const result = await orderServices.getOrdersByUserById(id, orderId);

  if (result.error) return next(result);

  res.status(success.OK).json({ orders: result });
});

const getOrdersBySellerById = rescue(async (req, res, next) => {
  const { orderId } = req.params;
  const { id } = req.dataUser;
  const result = await orderServices.getOrdersBySellerById(id, orderId);

  if (result.error) return next(result);

  res.status(success.OK).json({ orders: result });
});

const getAllOrders = rescue(async (_req, res, next) => {
  const result = await orderServices.getAllOrders();

  if (result.error) return next(result);

  res.status(success.OK).json({ orders: result });
});


module.exports = {
  createOrder,
  getAllOrders,
  getAllOrdersByUserId,
  getAllOrdersBySellerId,
  getOrdersByUserById,
  getOrdersBySellerById,
};
