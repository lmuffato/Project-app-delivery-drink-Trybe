const jwt = require('jsonwebtoken');

const secret = process.env.SECRET || 'e717vdd^DEp.';

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ data: 'missing auth token' });

  try {
    const token = jwt.verify(authorization, secret);

    if (!token) {
      return res.status(401).json({ data: 'jwt malformed' });
    }

    req.user = token;
    req.auth = authorization;

    next();
  } catch (error) {
    return res.status(401).json({ data: error.message });
  }

  return false;
};

module.exports = {
  validateToken,
};
