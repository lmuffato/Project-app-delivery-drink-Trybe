const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

/** @type {import('express').RequestHandler} */
const validateToken = (req, _res, next) => {
  try {
    const { authorization } = req.headers;
    const jwtPath = path.resolve(__dirname, '..', '..', '..', 'jwt.evaluation.key');
    const JWT_SECRET = fs.readFileSync(jwtPath, 'utf8');
    jwt.verify(authorization, JWT_SECRET);
    next();
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

module.exports = validateToken;
