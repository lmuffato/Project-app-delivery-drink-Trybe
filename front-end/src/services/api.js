import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3232/api/task',
});

export default {
  getLogin: async (email, password) => {
    const { data } = await api.post('url', { email, password });
    return data;
  },
  getRegister: async (name, email, password) => {
    const { data } = await api.post('url', { name, email, password });
    return data;
  },
};
