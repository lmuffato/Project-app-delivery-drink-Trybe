import axios from 'axios';

const fetchSaleUpdate = async (token, updateSale) => {
  const response = await axios.patch('http://localhost:3001/saleUpdate', { updateSale },
    { headers: { Authorization: token } });
  return response;
};

export default fetchSaleUpdate;
