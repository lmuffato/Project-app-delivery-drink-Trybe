const jwt = require('jsonwebtoken')
const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), 'utf8')

const secret = file;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '15m',
};

const createJWT = (data) => {
  const token = jwt.sign({ data }, secret, jwtConfig);
  return token;
};

module.exports = {
  createJWT,
};
