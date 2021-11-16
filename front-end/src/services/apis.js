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

export const setLogin = async (email, password) => {
  const result = await api.post('/login', { email, password });
  return result.data;
};

export const createUser = async (name, email, password) => {
  const result = await api.post('/users', { name, email, password });
  return result.data;
};
