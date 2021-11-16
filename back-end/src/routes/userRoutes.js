const express = require('express');
const userController = require('../controllers/User');

const routes = express.Router();

routes.post('/', userController.createUser);

module.exports = routes;
