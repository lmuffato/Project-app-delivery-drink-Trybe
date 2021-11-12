const users = require('express').Router();

const usersController = require("../controllers/users")
const validateJWT = require('../middlewares/validateJWT');

users.post('/login', usersController.login);

users.post('/create', usersController.register);

users.post('/admin', validateJWT, usersController.adminRegister);

users.get('/sellers', usersController.getAllSellers);

users.get('/:id', validateJWT, usersController.getUserById);

users.delete('/admin/:id', usersController.deleteUser);

users.get('/', usersController.getAllUsers);


module.exports = users;
