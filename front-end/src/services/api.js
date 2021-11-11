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
};
