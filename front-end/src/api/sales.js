/// @ts-check
/// <reference path="./types.js" />
import axios from 'axios';
import variables from './variables';

const { BASE_URL } = variables;

export async function create(product, token) {
  try {
    const response = await axios.post(
      `${BASE_URL}/sales`, product, { headers: { Authorization: token } },
    );
    return response.data;
  } catch ({ response: { status, data: { message } } }) {
    /**
     * @type {ErrorResponse}
     */
    const errorRes = { status, message };
    throw errorRes;
  }
}

export const a = 10;
