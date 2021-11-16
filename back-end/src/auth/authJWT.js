const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), 'utf8').trim();

const secret = file;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '15m',
};

const createJWT = (data) => {
  const token = jwt.sign({ data }, secret, jwtConfig);
  return token;
};

const validateJWT = (token) => {
  try {
    const payload = jwt.verify(token, secret);
    const { data } = payload;
    return data;
  } catch (e) {
    const data = e.message;
    return data;
  }
};

module.exports = {
  createJWT,
  validateJWT,
};
