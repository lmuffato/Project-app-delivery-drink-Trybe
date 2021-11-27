const jwt = require('jsonwebtoken');
// const fs = require('fs');
// const path = require('path');

// const SECRET = fs.readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), 'utf8');
const SECRET = 'secret_key';

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(404).json({ message: 'Token not found' });

  try {
    const verifyToken = jwt.verify(token, SECRET);
    req.user = verifyToken;

    next();
  } catch (_err) {
    res.status(403).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateToken };
