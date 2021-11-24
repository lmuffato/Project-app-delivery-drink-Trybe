/// @ts-check
/// <reference path="./types.js" />
import axios from 'axios';
import variables from './variables';

const { BASE_URL } = variables;

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
     * @type {ErrorResponse}
     */
    const errorRes = data;
    throw errorRes;
  }
}

export default login;
