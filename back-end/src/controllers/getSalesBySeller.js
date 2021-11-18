const { find, takeToken } = require('../services');

const stringNmae = 'seller_id';
const getSalesBySeller = async (req, res) => {
    const { authentication } = req.headers;
    const { id } = takeToken(authentication);
    const resuls = await find('sales', { [stringNmae]: id });
    res.status(200).json([...resuls]);
};

module.exports = getSalesBySeller;