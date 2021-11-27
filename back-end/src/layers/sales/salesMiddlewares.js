const { sales, salesProducts, products, users } = require('../../database/models');

const getAll = async (req, res) => {
  try {
    const data = await sales.findAll();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sales.findByPk(id);
    console.log(data);
    if (!data) { return res.status(404).json({ message: 'User does not exist' }); }
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

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

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const obj = { status };
    const data = await sales.update(obj, { where: { id } });
  return res.status(200).json(data);
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

const createNew = async (req, res) => {
  try {
    const {
      userId, totalPrice, sellerId, deliveryAddress, deliveryNumber, status,
    } = req.body;
    const obj = {
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status,
    };
    const newData = await sales.create(obj);
    return res.status(201).json(newData);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const formatSale = (saleObj) => {
  const {
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
  } = saleObj;
  const obj = {
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
  };
  return obj;
};

const createSale = async (req, res, next) => {
  try {
    const { sale, salesProductsArray } = req.body;
    const obj = formatSale(sale);
    const newData = await sales.create(obj);
    req.saleId = { saleId: newData.id };
    req.salesProducts = { salesProductsArray };
    next();
  } catch (err) {
    console.log('tttttt', err);
    return res.status(500).json({ message: err.message });
  }
};

const formatSalesObjectArray = (saleId, arr) => {
  const newArr = arr.map(({ productId, quantity }) => {
    const newObj = {
     saleId,
     productId,
     quantity,
    };
    return newObj;
  });
  return newArr;
};

const createManySaleProducts = async (req, res) => {
  try {
    const { salesProductsArray } = req.salesProducts;
    const arr = Object.values(salesProductsArray);
    const { saleId } = req.saleId;
    const newArr = formatSalesObjectArray(saleId, arr[0]);
    await salesProducts.bulkCreate(newArr);
    console.log('sale id', saleId);
    return res.status(201).json(saleId);
  } catch (err) {
    console.log('uuuuuuu', err);
    return res.status(500).json({ message: err.message });
  }
};

const segregateItensList = async (obj) => {
  const arr = await obj.products;
  const itensList = arr.map((ele) => {
    const newObj = {
      productId: ele.id,
      name: ele.name,
      quantity: ele.salesProducts.quantity,
      price: ele.price,
    };
    return newObj;
  });
  return itensList;
};

const segregateSale = async (obj) => {
  const key = 'products';
  const { [key]: _, ...newObj } = await obj.dataValues;
  return newObj;
};

const getSellerName = async (id) => {
  const sellerName = await users.findByPk(id, { attributes: ['name'] });
  const { name } = sellerName;
  return name;
};

const mountResponseObj = async (obj) => {
  const itensList = await segregateItensList(obj);
  const sale = await segregateSale(obj);
  sale.sellerName = await getSellerName(sale.sellerId);
  const newObj = { sale, itensList };
  return newObj;
};

const getAllOrdersByCustomers = async (req, res) => {
  try {
    const { user } = req.headers;
    const data = await sales.findAll({ where: { userId: user } });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getAllOrdersBySellerId = async (req, res) => {
  try {
    const { user } = req.headers;
    const data = await sales.findAll({ where: { sellerId: user } });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getSaleAndSaleProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = await sales.findOne({
      where: { id },
      include: [{ model: products, as: 'products' }],
    });
    const newObj = await mountResponseObj(obj);
    return res.status(200).json(newObj);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getOrderFull = async (req, res) => {
  try {
    const { id } = req.params;
    const allProducts = await salesProducts.findAll({ where: { saleId: id } });
    const sale = await sales.findOne({ where: { id } });
    const obj = { sale, allProducts };
    return res.status(200).json(obj);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  updateById,
  deleteById,
  createNew,
  createSale,
  createManySaleProducts,
  getSaleAndSaleProducts,
  getOrderFull,
  updateStatus,
  getAllOrdersByCustomers,
  getAllOrdersBySellerId,
};
