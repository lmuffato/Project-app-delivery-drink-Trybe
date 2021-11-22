/// @ts-check
/// <reference path="./types.js" />
import axios from 'axios';
import variables from './variables';

const { BASE_URL } = variables;

/**
 * @param {Omit<Product, 'id'>} product
 * @returns
 */
export async function create(product) {
  try {
    /**
     * @type {import('axios').AxiosResponse<User>}
     */
    const response = await axios.post(
      `${BASE_URL}/products`, product,
    );
    return response.data;
  } catch ({ response: { data } }) {
    /**
     * @type {ErrorResponse}
     */
    const errorRes = data;
    throw errorRes;
  }
}

export async function getById(id, token) {
  try {
    /**
       * @type {import('axios').AxiosResponse<User>}
       */
    const response = await axios.post(
      `${BASE_URL}/products/${id}`, {}, { headers: { Authorization: token } },
    );
    return response.data;
  } catch ({ response: { data } }) {
    /**
       * @type {ErrorResponse}
       */
    const errorRes = data;
    throw errorRes;
  }
}

export async function update(user, id, token) {
  try {
    /**
       * @type {import('axios').AxiosResponse<User>}
       */
    const response = await axios.put(
      `${BASE_URL}/products/${id}`, user, { headers: { Authorization: token } },
    );
    return response.data;
  } catch ({ response: { data } }) {
    /**
       * @type {ErrorResponse}
       */
    const errorRes = data;
    throw errorRes;
  }
}

/**
 * Get all products
 * @param {*} token Authentication token
 * @returns
 */
export async function getAll(token) {
  try {
    /**
       * @type {import('axios').AxiosResponse<Product[]>}
       */
    const response = await axios.get(
      `${BASE_URL}/products/`, { headers: { Authorization: token } },
    );
    return response.data;
  } catch ({ response: { data } }) {
    /**
       * @type {ErrorResponse}
       */
    const errorRes = data;
    throw errorRes;
  }
}

export async function deleteUser(id, token) {
  try {
    /**
       * @type {import('axios').AxiosResponse<User>}
       */
    const response = await axios.delete(
      `${BASE_URL}/products/${id}`, { headers: { Authorization: token } },
    );
    return response.data;
  } catch ({ response: { data } }) {
    /**
       * @type {ErrorResponse}
       */
    const errorRes = data;
    throw errorRes;
  }
}
