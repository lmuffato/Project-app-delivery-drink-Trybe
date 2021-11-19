const jwt = require('jsonwebtoken');
const { getSecretKey } = require('./getSecretKey');

exports.generateToken = ({ email, role }) => {
  const JWT_SECRET = getSecretKey();
  return jwt.sign({ email, role }, JWT_SECRET, { expiresIn: '12h' });
};
