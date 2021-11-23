const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const { tokenNotFound, invalidToken } = require('../utils/errorMap');

const SECRET = fs.readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), { encoding: 'utf8'}).trim();

const validateToken = (req, _res, next) => {
  try {
    const { authorization: token } = req.headers;

    if (!token) next(tokenNotFound.error);

    const decodedToken = jwt.verify(token, SECRET);

    req.token = decodedToken;

    next();
  } catch (error) {
    next(invalidToken.error);
  }
};

module.exports = { validateToken }; 
