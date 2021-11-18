const { productService } = require('../service');

const getAllProducts = async (_req, res) => {
  try {
    const product = await productService.getAllProducts();
    return res.status(200).json(product);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAllProducts,
};
