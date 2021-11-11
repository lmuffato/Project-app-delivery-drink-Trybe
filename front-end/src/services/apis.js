import axios from 'axios';

const PORT = 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export const fetchUser = async () => {
  const result = await api.get('/users');
  return result.data;
};

export const fetchProduct = async () => {
  const result = await api.get('/products');
  return result.data;
};

export const fetchSale = async () => {
  const result = await api.get('/sales');
  return result.data;
};

export const fetchSaleProduct = async () => {
  const result = await api.get('/salesproducts');
  return result.data;
};
