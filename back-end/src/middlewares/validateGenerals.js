const jwtFunctions = require('../auth/jwtFunctions');

const verifyToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  console.log('authorization', token);
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const authUser = jwtFunctions.verify(token);
    req.user = authUser;
    next();
  } catch (_err) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  verifyToken,
};