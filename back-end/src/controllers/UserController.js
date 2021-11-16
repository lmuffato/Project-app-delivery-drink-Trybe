const User = require('../services/userService');

const getUserbyEmail = async (req, res) => {
    const { email } = req.body;
    const { status, message, data, token } = await User.getUserbyEmail(email);
    if (message) return res.status(status).json({ message });
    return res.status(status).json({ user: data, token });
  };

const register = async (req, res) => {
    const { name, email, password, role } = req.body;
  
    const response = await User.register({ name, email, password, role });
  
    return res.status(201).json(response);
  };

  module.exports = {
      getUserbyEmail,
      register,
  };
