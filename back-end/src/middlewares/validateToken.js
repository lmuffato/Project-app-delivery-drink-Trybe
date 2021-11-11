const { validateJWT } = require('../auth/authJWT');

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }
  const data = validateJWT(token);
  if (data.name) {
    req.user = data;
    return next();
  }
  return res.status(401).json({ message: 'token malformed' });
};

module.exports = {
  validateToken,
};
