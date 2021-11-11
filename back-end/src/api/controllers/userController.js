const {
  userLogin,
  createUser,
  getUsers,
  getSellers,
  deleteUser } = require('../services/userService');
const {
  CREATED,
  BAD_REQUEST,
  OK,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND } = require('../services/statusCode');

const validUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { name, role } = await userLogin(email, password);

    return res.status(OK).json({ name, email, role, token: req.token });
  } catch (e) {
    return res.status(NOT_FOUND).json({ message: e.message });
  }
};

const addUser = async (req, res) => {
  const newUser = await createUser(req.body);

  if (newUser.message) {
    return res.status(BAD_REQUEST).json({ message: newUser.error.message });
  }

  return res.status(CREATED).json(newUser);
};

const addUserByAdmin = async (req, res) => {
  const newUser = await createUser(req.body);

  return res.status(CREATED).json(newUser);
};

const getAllUsers = async (_req, res) => {
  const users = await getUsers();

  res.status(OK).json(users);
};

const removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userRemoved = await deleteUser(id);

    return res.status(200).json({ message: 'Usuário excluído com sucesso!', userRemoved });
  } catch (e) {
    res.status(500).json({ message: 'Erro ao deletar usuário!' });
  }
};

const getAllSellers = async (_req, res) => {
  const sellers = await getSellers();

  if (sellers) return res.status(OK).json(sellers);
  
  return res.status(INTERNAL_SERVER_ERROR).json({ message: 'Error' });
};

module.exports = {
  validUser,
  addUser,
  getAllUsers,
  getAllSellers,
  addUserByAdmin,
  removeUser,
};
