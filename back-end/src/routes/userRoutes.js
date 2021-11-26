const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/User');

const routes = express.Router();

routes
  .post('/', rescue(userController.createUser))
  .post('/login', rescue(userController.findByEmailUser))
  .get('/sales', rescue(userController.getSalesByUser))
  .get('/:id', rescue(userController.findByIdUser))
  .get('/', rescue(userController.findAllUsers))
  .put('/:id', rescue(userController.updateUser))
  .delete('/:id', rescue(userController.removeUser)); 

routes.use((_req, _res, _err) => console.log('teste'));

module.exports = routes;
