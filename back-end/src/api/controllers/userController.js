const Userservice = require('../services');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = { name, email, password, role: 'customer' };

  const user = await Userservice.createUser(newUser);

  if (!user) {
    return res.status(409).json({ message: 'User already exists!' });
  }
  
  res.status(201).json(user);
};

module.exports = {
  createUser,
};