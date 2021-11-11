const rescue = require('express-rescue');
const serviceUser = require('../services/user');

const getAllUser = rescue(async (_req, res) => {
  const { status, data } = await serviceUser.getAllUser();
  res.status(status).json(data);
});

// const createUser = rescue(async (req, res) => {
//   const { name, email, password, role } = req.body;

//   const { status, data } = await serviceUser.createUser(name, email, password, role);

//   res.status(status).json(data);
// });

module.exports = {
  getAllUser,
  // createUser,
};