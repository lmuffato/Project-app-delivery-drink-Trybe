const jwt = require('jsonwebtoken');
const fs = require('fs').promises;


const validateJwt = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  try {
    const privateKey = await fs.readFile('jwt.evaluation.key', 'utf8');

    const decoded = jwt.verify(token, privateKey);

    req.user = decoded;

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Token inválido ou expirado' });
  }
};

module.exports = validateJwt;
