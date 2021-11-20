const jwt = require('jsonwebtoken');
const path = require('path');
const segredo = require('fs')
.readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), { encoding: 'utf-8' }).trim();

require('dotenv').config();

const JWT_SECRET = segredo;

module.exports = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json(false);
  }

  try {
    const data = jwt.verify(authorization, JWT_SECRET);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(401).json(false);
  }
};
