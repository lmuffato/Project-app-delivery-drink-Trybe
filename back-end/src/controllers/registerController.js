const md5 = require('md5');
const { User } = require('../database/models');
const httpStatus = require('../utils/httpStatus');

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const md5Password = md5(password);
  await User.create({
    name,
    email,
    md5Password,
    role,
  }).catch((e) => res.status(httpStatus.serverError).json({ error: { message: e.message } }));
  res.status(httpStatus.created).json({ message: `User ${name} created` });
};

module.exports = {
  registerUser,
};
