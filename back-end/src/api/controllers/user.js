const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/user');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await UserService.login({ email, password });
    if (data) {
      return res.status(StatusCodes.OK).json({ ...data });
    }
    return res.status(StatusCodes.NOT_FOUND).end();
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
};

exports.register = async (req, res) => {
  try {
    const { fullName, email, password, role = 'customer' } = req.body;
    const jwt = await UserService.create({ fullName, email, password, role });
    if (jwt) {
      return res.status(StatusCodes.CREATED).json({ token: jwt });
    }
    return res.status(StatusCodes.CONFLICT).end();
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
};
