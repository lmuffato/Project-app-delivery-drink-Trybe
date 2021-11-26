import axios from 'axios';

const fetchSalesUserSellers = async (token, id, sellerId) => {
  console.log(token, id, sellerId);
  const response = await axios.post('http://localhost:3001/salesUserSellers', { id, sellerId },
    { headers: { Authorization: token } });
  console.log(response);
  return response;
};

export default fetchSalesUserSellers;
