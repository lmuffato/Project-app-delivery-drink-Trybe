const express = require('express');

const getImage = require('../controllers/images');

const loginRouter = express.Router();

loginRouter.get('/:image', getImage);

module.exports = loginRouter;
