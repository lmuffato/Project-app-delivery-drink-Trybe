import axios from 'axios';

const fetchCustomerSales = async (token, userId) => {
  const response = await axios.post('http://localhost:3001/customerSale', { userId },
    { headers: { Authorization: token } });
  console.log(response);
  return response;
};

export default fetchCustomerSales;
