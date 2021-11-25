const jwt = require('jsonwebtoken');
const path = require('path');
const secret = require('fs')
.readFileSync(path.join(__dirname, '../../../jwt.evaluation.key'), { encoding: 'utf-8' }).trim();

const { MISSING_AUTH_TOKEN, JWT_MALFORMED } = require('../messages/errorMessages');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ data: MISSING_AUTH_TOKEN });

  try {
    const splited = authorization.split(' ');
    const auth = splited.length > 1 ? splited[1] : splited[0];
    const token = jwt.verify(auth, secret);

    console.log(token)

    if (!token) {
      return res.status(401).json({ data: JWT_MALFORMED });
    }

    req.user = token;
    req.auth = auth;

    next();
  } catch (error) {
    return res.status(401).json({ data: error.message });
  }

  return false;
};

module.exports = {
  validateToken,
};
