const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs').promises;

const pathSecret = path.resolve(__dirname, '..', '..', 'jwt.evaluation.key');

const verifyToken = async (token) => {
  const secret = await fs.readFile(pathSecret, 'utf-8');
  try {
    return jwt.verify(token, secret);
  } catch (_err) {
    return null;
  }
};

module.exports = verifyToken;
