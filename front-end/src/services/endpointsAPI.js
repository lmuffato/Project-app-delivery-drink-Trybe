import axios from 'axios';

const port = 3001;

const PORT = process.env.PORT || port;

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

export const createNewUserByAdmin = async (obj) => {
  const { name, email, password, role, token } = obj;
  const apiForAdm = axios.create({
    baseURL: `http://localhost:${PORT}`,
    headers: { authorization: token },
  });
  const result = await apiForAdm.post('/users/createbyadmin',
    { name, email, password, role });
  return result.data;
};

export const checkUserToken = async (token) => {
  const result = await api.post('/users/token', { token });
  return result.data;
};

export const getAllUsers = async () => {
  const result = await api.get('users');
  return result.data;
};

export const getAllUsersCustomers = async () => {
  const result = await api.get('/users/customers');
  return result.data;
};

export const getAllUsersSallers = async () => {
  const result = await api.get('users/sellers');
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

export const getSales = async () => {
  const result = await api.get('/sales');
  return result.data;
};

export const getSalesByCustomerId = async (id) => {
  const result = await api.get('/sales', { id });
  return result.data;
};

export const postSales = async (obj) => { // obj = { userId, totalPrice, deliveryAddress, deliveryNumber, status }
  const result = await api.post('/sales', obj);
  return result.data;
};

export const createInSalesAndSalesProducts = async (sale, salesProductsArray) => {
  const data = { sale, salesProductsArray };
  const result = await api.post('/sales/createsale', data);
  return result.data;
};

export const getSalesProducts = async () => {
  const result = await api.get('/salesProducts');
  return result.data;
};

export const postSalesProducts = async () => {
  const result = await api.post('/salesProducts');
  return result.data;
};

export const getOrderById = async (id) => {
  const result = await api.get(`/sales/order/${id}`);
  return result.data;
};

export const updateSaleStatus = async (id, status) => {
  const obj = { status };
  const result = await api.patch(`/sales/updatesale/${id}`, obj);
  return result.data;
};

export const getUserById = async (id) => {
  const result = await api.get(`/sales/order/${id}`);
  return result.data;
};
