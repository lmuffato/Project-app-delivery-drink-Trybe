import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export default {
  getLogin: async (email, password) => {
    const { data } = await api.post('/login', { email, password });
    return data;
  },
  getRegister: async (name, email, password) => {
    const { data } = await api.post('/registration', { name, email, password });
    return data;
  },
  getProducts: async (token) => {
    const { data } = await api.get('/products', {
      headers: {
        Authorization: token,
      },
    });
    return data;
  },
  getSales: async (id, token) => {
    const { data } = await api.get(`/orders/costumer/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  },
  getSaleById: async (id, token) => {
    const { data } = await api.get(`/orders/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  },
  getSellers: async () => {
    const { data } = await api.get('/sellers');
    return data;
  },
  postSale: async (obj, token) => {
    console.log(obj, token);
    const { data } = await api.post('/orders', {
      headers: {
        Authorization: token,
      },
      obj,
    });
    return data;
  },
};
