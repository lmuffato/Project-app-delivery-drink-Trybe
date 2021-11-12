const { sales } = require('../../database/models');

const getAll = async (req, res) => {
  try {
    const data = await sales.findAll();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Busca por id utilizando a chave primária
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sales.findByPk(id);
    console.log(data);
    if (data === null) { return res.status(404).json({ message: 'User does not exist' }); }
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Buscar por id utilizando where
// const getById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = await sales.findOne({
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
    const { userId, totalPrice, deliveryAddress, deliveryNumber, status, saleDate } = req.body;
    const obj = { userId, totalPrice, deliveryAddress, deliveryNumber, status, saleDate };
    await sales.update(obj, { where: { id } });
  return res.status(200).json(obj);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const dataToDelete = await sales.findByPk(id);
    await dataToDelete.destroy();
    return res.status(200).json(dataToDelete);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// const removeKeyInObject = (obj, key) => {
//   const { [key]: _, ...newObj } = obj;
//   return newObj;
// };

const createNew = async (req, res) => {
  try {
    const {
      userId, totalPrice, deliveryAddress, deliveryNumber, status,
    } = req.body;
    const obj = {
      userId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status,
    };
    await sales.create(obj);
    const newData = await sales.create(obj);
    return res.status(201).json(newData);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  updateById,
  deleteById,
  createNew,
};
