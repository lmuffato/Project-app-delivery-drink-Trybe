const insert = require('../../services/insert');
const find = require('../../services/find');
const { isUserExists } = require('../../schemas');

module.exports = async (req, res) => {
  const { name, email, password, role } = req.body;
  
  const isExists = await isUserExists({ name, email }, find);
  
  if (isExists.message) return res.status(isExists.status).json(isExists.message);

  const createdUser = await insert(
    'users',
    { name, email, password, role },
  );

  res.status(201).json(createdUser);
};
