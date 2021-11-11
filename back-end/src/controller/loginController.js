const services = require('../service');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await services.login(email, password);

    if (login.message) {
      return res.status(login.code).json({ message: login.message });
    }
    
    return res.status(200).json({ message: 'successful login' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = loginUser;
