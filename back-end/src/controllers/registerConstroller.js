const { createToken } = require('../middlewares/createJwt');
const httpStatus = require('../utils/httpStatus');

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const user = { email, password };

  const token = createToken(user);

  res.status(httpStatus.ok).json(token);  
};

module.exports = {
  loginUser,
};
