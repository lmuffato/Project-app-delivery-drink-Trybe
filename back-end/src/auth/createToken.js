const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs').promises;

const pathSecret = path.resolve(__dirname, '..', '..', 'jwt.evaluation.key');

const headers = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const createToken = async (payload) => {
  const secret = await fs.readFile(pathSecret, 'utf-8');
  return jwt.sign(payload, secret, headers);
};

module.exports = createToken;
