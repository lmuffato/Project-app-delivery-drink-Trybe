/// @ts-check
/// <reference path="./types.js" />
import axios from 'axios';
import variables from './variables';

const { BASE_URL } = variables;

/**
   * register a new customer
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @returns
   */
export async function create(name, email, password) {
  try {
    /**
     * @type {import('axios').AxiosResponse<User>}
     */
    const response = await axios.post(
      `${BASE_URL}/users/register`, { name, email, password },
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

/**
   * Get an user by its id
   * @param {number} id user id
   * @param {string} token authentication token
   * @returns
   */
export async function getById(id, token) {
  try {
    /**
       * @type {import('axios').AxiosResponse<User>}
       */
    const response = await axios.post(
      `${BASE_URL}/users/${id}`, {}, { headers: { Authorization: token } },
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

/**
   * Edit an user
   * @param {Omit<User, 'id'>} user
   * @param {number} id
   * @param {string} token
   * @returns
   */
export async function update(user, id, token) {
  try {
    /**
       * @type {import('axios').AxiosResponse<User>}
       */
    const response = await axios.put(
      `${BASE_URL}/users/${id}`, user, { headers: { Authorization: token } },
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

/**
 * Get all users
 * @param {string} token
 * @returns
 */
export async function getAll(token) {
  try {
    /**
       * @type {import('axios').AxiosResponse<User[]>}
       */
    const response = await axios.get(
      `${BASE_URL}/users/`, { headers: { Authorization: token } },
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

export async function createUser(name, email, password, { role = 'customer', token }) {
  console.log(token);
  try {
    /**
     * @type {import('axios').AxiosResponse<User>}
     */
    const response = await axios.post(
      `${BASE_URL}/users`, { name, email, password, role },
      { headers: { authorization: token } },
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

/**
 * Delete an user by its id
 * @param {number} id
 * @param {string} token
 * @returns
 */
export async function deleteUser(id, token) {
  try {
    /**
       * @type {import('axios').AxiosResponse<User>}
       */
    const response = await axios.delete(
      `${BASE_URL}/users/${id}`, { headers: { Authorization: token } },
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
