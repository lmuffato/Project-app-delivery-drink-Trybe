const jwt = require('jsonwebtoken');
const { getSecretKey } = require('./getSecretKey');

exports.parseToken = ({ token }) => {
  const JWT_SECRET = getSecretKey();
  return jwt.verify(token, JWT_SECRET);
};
