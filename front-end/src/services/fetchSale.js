import axios from 'axios';

const fetchSale = async (customer, sellerId, cartProducts, address) => {
  const { token } = customer;
  const response = await axios.post('http://localhost:3001/sale', { customer, sellerId, cartProducts, address },
    { headers: { Authorization: token } });
  return response;
};

export default fetchSale;
