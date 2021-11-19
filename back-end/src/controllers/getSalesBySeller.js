const { find, takeToken } = require('../services');

const stringName = 'seller_id';
const getSalesBySeller = async (req, res) => {
    const { authentication } = req.headers;
    const { id } = takeToken(authentication);
    const results = await find('sales', { [stringName]: id });
    res.status(200).json([...results]);
};

module.exports = getSalesBySeller;