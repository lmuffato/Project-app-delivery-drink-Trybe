import axios from 'axios';

const PORT = 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export const doLogin = async (email, password) => {
  const result = await api.post('/users/login', { email, password });
  return result.data;
};

export const createNewUser = async (name, email, password) => {
  const result = await api.post('/users/create', { name, email, password });
  return result.data;
};

export const checkUserToken = async (token) => {
  const result = await api.post('/users/token', { token });
  return result.data;
};

export const getProducts = async () => {
  const result = await api.get('/products');
  return result.data;
};

export const postProducts = async (name, price, urlImage) => {
  const result = await api.post('/products', { name, price, urlImage });
  return result.data;
};

export const postSales = async (name, price, urlImage) => {
  const result = await api.post('/products', { name, price, urlImage });
  return result.data;
};

export const createNewUserByAdmin = async (obj) => {
  const { name, email, password, role, token } = obj;
  const apiForAdm = axios.create({
    baseURL: `http://localhost:${PORT}`,
    headers: { authentication: token },
  });
  const result = await apiForAdm.post('/users/createbyadmin',
    { name, email, password, role });
  return result.data;
};
