const jwt = require('jsonwebtoken');

const SECRET = require('../../../jwt.evaluation.key');

const jwtConfig = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

const createToken = (userData) => jwt.sign({ data: userData }, SECRET, jwtConfig);

module.exports = {
  createToken,
};