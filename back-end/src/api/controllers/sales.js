const Sales = require('../services/sales');

const findById = async (req, res, next) => {
  try {
    const { id } = req.params
    console.log('xablau',req.params);
    const sale  = await Sales.findById(id);

    res.status(200).json(sale);
  } catch (err) {
    // err.code = 404;
    next(err);
  }
}

module.exports = {
  findById,
}