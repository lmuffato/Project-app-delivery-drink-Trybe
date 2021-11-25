import api from './api';

const getAllProducts = async () => {
  try {
    const res = await api.get('/products');
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export default getAllProducts;
