const { products } = require('../../database/models');

const createNew = async (req, res) => {
  try {
    const { name, price, urlImage } = req.body;
    // const hash = crypto.createHash('md5').update(password).digest('hex');
    // const oldUserByEmail = await users.findOne({ where: { email } });
    // const oldUserByName = await users.findOne({ where: { name } });
    // if (oldUserByEmail || oldUserByName) return res.status(409).json({ message: false });
    const obj = { name, price, urlImage };
    await products.create(obj);
 
    return res.status(201).json({ message: true });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const data = await products.findAll({});
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Busca por id utilizando a chave primária
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await products.findByPk(id);
    if (data === null) { return res.status(404).json({ message: 'products does not exist' }); }
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getManyById = async (req, res) => {
  const { id } = req.params;
  const data = await products.findAll({ where: { id } });
  return res.status(200).json(data);
};

// Buscar por id utilizando where
// const getById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = await products.findOne({
//       where: { id },
//       attributes: { exclude: ['password'] },
//     });
//     return res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, urlImage } = req.body;
    const obj = { name, price, urlImage };
    await products.update(obj, { where: { id } });
  return res.status(200).json(obj);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const dataToDelete = await products.findByPk(id);
    await dataToDelete.destroy();
    return res.status(200).json(dataToDelete);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// const createNew = async (req, res) => {
//   try {
//     const { name, price, urlImage } = req.body;
//     const obj = { name, price, urlImage };
//     await products.create(obj);
//     const newData = await products.create(obj);
//     return res.status(201).json(newData);
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
// };

module.exports = {
  getAll,
  getById,
  updateById,
  deleteById,
  createNew,
  getManyById,
};
