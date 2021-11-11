const rescue = require('express-rescue');
const { verifyAuthService } = require('../services/verifyAuthService');

const verifyAuth = rescue(async (req, _res, next) => {
  const { authorization: token } = req.headers;
  const result = await verifyAuthService(token);
  
  if (result.error) return next(result);

  req.dataUser = { ...result };

  next();
});

module.exports = verifyAuth;
