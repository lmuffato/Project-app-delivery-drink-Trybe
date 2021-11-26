const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { userController, productsController, saleController } = require('./controllers');

const newUserAuthentication = require('./middleware/validateNewUser');
const { validateAdmin } = require('./middleware/validateAdmin');
const { validateToken } = require('./auth/validateToken');
const { validateSeller } = require('./middleware/validateSeller');
const { validateUpdateOrder } = require('./middleware/validateUpdateOrder');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, '..', '..', 'public', 'images')));
app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/login', userController.login);

app.get('/products', validateToken, productsController.findAllProducts);

app.post('/register', newUserAuthentication, userController.createUser);

app.route('/admin')
  .get(validateToken, validateAdmin, userController.findAllUsers)
  .post(validateToken, validateAdmin, userController.createAdmin);

app.delete('/admin/:id', validateToken, validateAdmin, userController.deleteUser);

app.post('/sales', validateToken, saleController.registerSale);

app.route('/orders')
  .post(validateToken, saleController.registerSale)
  .get(validateToken, saleController.getAllOrders);

app.get('/sellers', validateToken, userController.findAllSellers);

app.put('/orders/:id', validateToken, validateUpdateOrder, saleController.updateOrder);

app.get('/orders/:id', validateToken, saleController.getOrdersByUserId);

app.get('/orders/sellerId/:id', validateToken, validateSeller, saleController.getOrdersBySellerId);

module.exports = app;
