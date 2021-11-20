/// @ts-check
/// <reference path="./types.js" />
import axios from 'axios';

const { REACT_APP_BASE_URL: BASE_URL = 'http://[::1]:3001' } = process.env;

const api = {
  async login(email, password) {
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
  },
};
export default api;
