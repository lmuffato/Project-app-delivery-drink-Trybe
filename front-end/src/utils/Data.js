import axios from 'axios';

const fetchAllProducts = async () => {
  const response = await fetch('http://localhost:3001/products');
  const result = await response.json();
  return result;
};

export const getSellers = async () => {
  const { data } = await axios.get('http://localhost:3001/users?role=seller');
  return data;
};

export default fetchAllProducts;
