const jwt = require('jsonwebtoken');
const fs = require('fs').promises;

// const secret = 'senha_dificil';

const validateJwt = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'token not found' });
  }

  try {
    
    const privateKey = await fs.readFile('jwt.evaluation.key', 'utf8')

    console.log(privateKey, 'midlaware')

    const decoded = jwt.verify(token, privateKey);

    req.user = decoded;

    console.log(req.user)
    next();
  } catch (e) {
    return res.status(401).json({ message: 'expired or invalid token' });
  }
};

module.exports = validateJwt;
