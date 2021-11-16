const User = require('../services/User');

const register = rescue(async (req, res) => {
    const { name, email, password, role } = req.body;
  
    const response = await User.register({ name, email, password, role });
  
    return res.status(201).json(response);
  });

  module.exports = {
      register
  };
