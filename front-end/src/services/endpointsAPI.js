import axios from 'axios';

const PORT = 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export const login = async (email, password) => {
  const result = await api.post('/users/login', { email, password });
  return result.data;
};

export const createNewUser = async (name, email, password) => {
  const result = await api.post('/users/create', { name, email, password });
  return result.data;
};


