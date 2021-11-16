const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { userController, productsController, saleController } = require('./controllers');

const newUserAuthentication = require('./middleware/validateNewUser');
const { validateAdmin } = require('./middleware/validateAdmin');
const { validateToken } = require('./auth/validateToken');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/login', userController.login);

app.get('/products', validateToken, productsController.findAllProducts);

app.post('/register', newUserAuthentication, userController.createUser);

app.route('/admin')
  .get(validateToken, validateAdmin, userController.findAllUsers)
  .post(validateToken, validateAdmin, userController.createAdmin)
  .delete(validateToken, validateAdmin, userController.deleteUser);

app.use('/sales', validateToken, saleController.registerSale);

module.exports = app;
