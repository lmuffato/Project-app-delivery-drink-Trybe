require('dotenv').config();
const jwt = require('jsonwebtoken');
// const validateCredential = require('./validateCredential');
const path = require('path');
const fs = require('fs');

// const SECRET = process.env.SECRET || 'segredo';

const SECRET = fs.readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), {
  encoding: 'utf8',
}).trim() || 'segredo';

module.exports = async (userData) => {
  // const userSearch = await validateCredential(userData);
  
  // if (userSearch.message) return userSearch;

  // const { password: _, ...userPayload } = userSearch;

  const { password: _, ...userPayload } = userData;

  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '15d',
  };

  const token = jwt.sign(userPayload, SECRET, jwtConfig);
  
  return token;
  // return { status: 200, token };
};