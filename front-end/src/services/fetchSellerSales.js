import axios from 'axios';

const fetchSellerSale = async (token, sellerId) => {
  const response = await axios.post('http://localhost:3001/sellerSale', { sellerId },
    { headers: { Authorization: token } });
  console.log(response);
  return response;
};

export default fetchSellerSale;
