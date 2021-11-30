const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/User');
const authMiddleWare = require('../middlewares/authMiddleWare');

const routes = express.Router();

routes
  .post('/', rescue(userController.createUser))
  .post('/admin', authMiddleWare, rescue(userController.createAdminUser))
  .post('/email', rescue(userController.findByEmailUser))
  .post('/login', rescue(userController.login))
  .get('/sales', rescue(userController.getSalesByUser))
  .get('/:id', rescue(userController.findByIdUser))
  .get('/', rescue(userController.findAllUsers))
  .put('/:id', rescue(userController.updateUser))
  .delete('/:id', rescue(userController.removeUser));

module.exports = routes;
