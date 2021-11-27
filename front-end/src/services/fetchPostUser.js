import api from './api';

const fetchPostUser = async (userData) => {
  try {
    const res = await api.post('/user/login', userData);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export default fetchPostUser;
