const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/User');

const routes = express.Router();

routes.post('/', rescue(userController.createUser));
routes.get('/', rescue(userController.findAllUsers));
routes.get('/:id', rescue(userController.findByIdUser));
routes.put('/:id', rescue(userController.updateUser));
routes.delete('/:id', rescue(userController.removeUser));

module.exports = routes;
