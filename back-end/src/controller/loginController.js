const jwt = require('jsonwebtoken');
const services = require('../service');

const secret = 'senha_dificil';

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await services.login(email, password);

    const payload = { login };

    const jwtConfig = { algorithm: 'HS256', expiresIn: '12h' };

    const token = jwt.sign(payload, secret, jwtConfig);

    if (login.message) {
      return res.status(login.code).json({ message: login.message });
    }
    
    return res.status(200).json({ token });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = loginUser;
