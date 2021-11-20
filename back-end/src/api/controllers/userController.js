const userService = require('../services/userService');

const HTTP_ERROR_STATUS = 400;
const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;

const login = async (req, res) => {
  try {
    const { user } = req;
    const response = await userService.login(user);
    return res.status(HTTP_OK_STATUS).json(response);
  } catch (error) {
    return res.status(HTTP_ERROR_STATUS).json({
      message: error,
  });
  }
};

const create = async (req, res) => {
  try {
    const { email, password, name, role } = req.body;
    const response = await userService.create({ 
      email, 
      requestPassword: password, 
      name, 
      requestRole: role,
    });
    return res.status(HTTP_CREATED_STATUS).json(response);
  } catch (error) {
    return res.status(HTTP_ERROR_STATUS).json({
      message: error,
  });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const response = await userService.getAllUsers();
    return res.status(HTTP_OK_STATUS).json(response);
  } catch (error) {
    return res.status(HTTP_ERROR_STATUS).json({
      message: error,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await userService.delete(id);
    if (response === 0) return res.status(HTTP_ERROR_STATUS).json({
      message: 'User not found',
    });
    return res.status(HTTP_OK_STATUS).json({
      message: 'User deleted',
    });
  } catch (error) {
    return res.status(HTTP_ERROR_STATUS).json({
      message: error,
    });
  }
};

module.exports = {
  login,
  create,
  getAllUsers,
  deleteUser,
};