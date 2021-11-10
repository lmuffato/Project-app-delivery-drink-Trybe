const jwt = require('jsonwebtoken');
const path = require('path')
const segredo = require("fs").readFileSync(path.join(__dirname, '../../../jwt.evaluation.key'), { encoding: "utf-8" }).trim();

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  try {
    const { data } = jwt.verify(authorization, segredo);
    req.user = data;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};