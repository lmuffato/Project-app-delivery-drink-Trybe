const jwt = require('jsonwebtoken');

const secret = 'senha_dificil';

const validateJwt = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'expired or invalid token' });
  }
};

module.exports = validateJwt;
