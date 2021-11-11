const express = require('express');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const productsController = require('../controllers/productsController');
const orderController = require('../controllers/orderController');
const verifyAuth = require('../middlewares/verifyAuth');

const loginRoute = express.Router();
const registerRoute = express.Router();
const productsRoute = express.Router();
const orderRoute = express.Router();

loginRoute.post('/', loginController.login);

registerRoute.post('/', registerController.createRegister);
registerRoute.use(verifyAuth);
registerRoute.get('/', registerController.getAllRegisters);
registerRoute.get('/role/:role', registerController.getByRole);
registerRoute.get('/:id', registerController.getByIdRegister);
registerRoute.delete('/:id', registerController.deleteByIdRegister);
registerRoute.get('/name/:id', registerController.getNameByIdRegister);

productsRoute.get('/', productsController.getAll);

orderRoute.use(verifyAuth);
orderRoute.post('/user', orderController.createOrder);
orderRoute.get('/seller', orderController.getAllOrdersBySellerId);
orderRoute.get('/user', orderController.getAllOrdersByUserId);
orderRoute.get('/seller/:orderId', orderController.getOrdersBySellerById);
orderRoute.get('/user/:orderId', orderController.getOrdersByUserById);
orderRoute.get('/', orderController.getAllOrders); 

module.exports = {
  loginRoute,
  registerRoute,
  productsRoute,
  orderRoute,
};
