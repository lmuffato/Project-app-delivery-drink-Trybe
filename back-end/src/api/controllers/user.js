const rescue = require('express-rescue');
const serviceUser = require('../services/user');

const getAllUser = rescue(async (_req, res) => {
  const { status, data } = await serviceUser.getAllUser();
  res.status(status).json(data);
});

module.exports = {
  getAllUser,
};
