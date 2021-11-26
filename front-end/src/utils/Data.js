import axios from 'axios';

const fetchAllProducts = async () => {
  const response = await fetch('http://localhost:3001/products');
  const result = await response.json();
  return result;
};

export const getSellers = async () => {
  const { data } = await axios.get('http://localhost:3001/users?role=seller');
  return data;
};

export const getSales = async (token) => {
  const data = await fetch('http://localhost:3001/sales/', {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });
  const result = await data.json();
  return result;
};

export const getSaleBySellerId = async (token) => {
  const data = await fetch('http://localhost:3001/seller/sales', {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });
  const result = await data.json();
  return result;
};

export const validateToken = async (token) => {
  const res = await fetch('http://localhost:3001/validToken', {
    method: 'POST',
    headers: {
      Authorization: token,
    },
  });

  const result = await res.json();

  return result;
};

export const statusChange = async (id) => {
  await fetch(`http://localhost:3001/setstatus/${id}`, {
    method: 'POST',
  });
};

export default fetchAllProducts;
