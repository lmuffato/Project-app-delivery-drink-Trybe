const genHashMd5 = require('md5');
const insert = require('../../services/insert');
const find = require('../../services/find');
const { isUserExists } = require('../../schemas');
const generateToken = require('../../utils/generateToken');

module.exports = async (req, res) => {
  const { name, email, password, role } = req.body;
  const passwordHash = genHashMd5(password);
  
  const isExists = await isUserExists({ name, email }, find);
  
  if (isExists.message) return res.status(isExists.status).json(isExists.message);

  const createdUser = await insert(
    'users',
    { name, email, password: passwordHash, role },
  );

  const token = generateToken(createdUser);

  res.status(201).json(token);
};
