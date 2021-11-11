const { createToken } = require('../middlewares/createJwt');
const httpStatus = require('../utils/httpStatus');

const loginUser = async (req, res) => {
  const { email, role, name, id } = req.user;
  const user = { email, role, name, id };

  const token = createToken(user);

  res.status(httpStatus.ok).json(token);  
};

module.exports = {
  loginUser,
};
