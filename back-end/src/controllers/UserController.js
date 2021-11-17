const User = require('../services/userService');

const getUserbyEmail = async (req, res) => {
    const { email } = req.body;
    const { status, message, data, token } = await User.getUserbyEmail(email);
    if (message) return res.status(status).json({ message });
    return res.status(status).json({ user: data, token });
  };

const register = async (req, res) => {
  try{
    const { name, email, password, role } = req.body;
    const response = await User.register({ name, email, password, role });
    if (response.message) {
      return res.status(response.code).json({ message: response.message });
    }
    return res.status(201).json(response);
  } catch (e) {
    return res.status(409).json({ message: e.message });
  }
};

  module.exports = {
      getUserbyEmail,
      register,
  };
