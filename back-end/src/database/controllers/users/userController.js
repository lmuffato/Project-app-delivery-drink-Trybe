const { User } = require('../../models');
const rescue = require('express-rescue');


const getUser = rescue(async (_req, res) => {
  const allUsers = await User.findAll();
  res.status(200).json(allUsers);
});

module.exports = { getUser };
