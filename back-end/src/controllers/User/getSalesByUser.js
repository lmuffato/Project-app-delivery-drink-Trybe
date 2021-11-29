const { find, takeToken } = require('../../services');

const stringNmae = 'user_id';
const getSalesByUser = async (req, res) => {
    const { authentication } = req.headers;
    const payload = takeToken(authentication);
    const resuls = await find('sales', { [stringNmae]: payload, order: ['sale_date'] });
    console.log(resuls);
    res.status(200).json([...resuls]);
};

module.exports = getSalesByUser;