const jwt = require('jsonwebtoken');
const path = require('path')
const segredo = require("fs").readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), { encoding: "utf-8" }).trim();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const tokenCreator = (user) => {
  const token = jwt.sign({ user }, segredo, jwtConfig);
  return token;
};


module.exports = tokenCreator;