const jwt = require('jsonwebtoken');
const path = require('path');
const secret = require('fs')
  .readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), { encoding: 'utf-8' })
  .trim();

const verify = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};

const validateJWT = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(404).json({ message: 'Token missing' });
    }
    const isValid = verify(token);
    return isValid ? next() : res.status(401).json({ message: 'Invalid token' });
};

module.exports = {
  validateJWT,
};
