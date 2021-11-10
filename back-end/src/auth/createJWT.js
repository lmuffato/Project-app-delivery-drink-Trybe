const jwt = require('jsonwebtoken')

const secret = require('../../jwt.evaluation.key')

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '15m',
};

const createJWT = (data) => {
  const token = jwt.sign({ data }, secret, jwtConfig);
  return token;
};

module.exports = createJWT;
