/// @ts-check
/// <reference path="./types.js" />
import axios from 'axios';

const { REACT_APP_BASE_URL: BASE_URL = 'http://[::1]:3001' } = process.env;

/**
 * Login um usuário na app
 * @param {string} email
 * @param {string} password
 * @returns
 */
async function login(email, password) {
  try {
    /**
     * @type {import('axios').AxiosResponse<OkLogin>}
     */
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
  } catch ({ response: { data } }) {
    /**
     * @type {ErrorLogin}
     */
    const errorRes = data;
    throw errorRes;
  }
}

const user = {
  /**
   * Registra um novo usuário (Cliente) no banco de dados
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @returns
   */
  async create(name, email, password) {
    try {
    /**
     * @type {import('axios').AxiosResponse<OkLogin>}
     */
      const response = await axios.post(
        `${BASE_URL}/users/register`, { name, email, password },
      );
      return response.data;
    } catch ({ response: { data } }) {
    /**
     * @type {ErrorLogin}
     */
      const errorRes = data;
      throw errorRes;
    }
  },
};

export default {
  login,
  user,
};
