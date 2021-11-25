const jwt = require('jsonwebtoken');

const secret = 'secret_key';

const validateAdmToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  try {
    const decoded = jwt.verify(token, secret);
  
    if (decoded.role !== 'administrator') {
      return res.status(401).json({ message: 'Permissão negada' });
    }

    next();
  } catch (e) {
    return res.status(401).json({ message: e.message });
  }
};

module.exports = {
  validateAdmToken,
};
