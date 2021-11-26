import md5 from 'md5';

const axios = require('axios').default;

const BASE_URL = process.env.REACT_APP_BASE_BACK_URL_POINT || 'http://localhost:3001';

export async function loginApi(email, password) {
  try {
    const login = (await axios.post(
      `${BASE_URL}/users/login`,
      { email, password: md5(password) },
      { responseType: 'json' },
    ));
    return login.data;
  } catch ({ response }) {
    throw response.data.message;
  }
}

export async function getSeler(user) {
  try {
    const allSellers = (await axios.get(
      `${BASE_URL}/users/sellers`,
      { headers: { Authorization: user } },
      { responseType: 'json' },
    ));
    return allSellers.data;
  } catch ({ response }) {
    throw response.data.message;
  }
}

export async function sendRequest({ data, sellInfo, token }) {
  try {
    const response = (await axios.post(
      `${BASE_URL}/sales`,
      { data, sellInfo },
      { headers: { Authorization: token } },
      { responseType: 'json' },
    ));
    return response.data;
  } catch ({ response }) {
    throw response.data.message;
  }
}

export async function getSaleById(token, id) {
  try {
    const response = (await axios.get(
      `${BASE_URL}/sales/${id}`,
      { headers: { Authorization: token } },
      { responseType: 'json' },
    ));
    return response.data;
  } catch ({ response }) {
    throw response.data.message;
  }
}

export async function postNewUser(token, { name, email, password, role }) {
  try {
    const response = axios.post(`${BASE_URL}/users`,
      { name, email, password, role },
      { headers: { Authorization: token } },
      { responseType: 'json' });
    return response;
  } catch ({ response }) {
    throw response.data.message;
  }
}
