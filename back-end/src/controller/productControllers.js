const service = require('../service');

const getAllProducts = async (req, res) => {
  try { 
    const product = await service.product();
    return res.status(200).json(product);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = getAllProducts;
