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
    const errorRes = { status, message };
    throw errorRes;
  }
}

export async function getAll(token) {
  try {
    const response = await axios.get(
      `${BASE_URL}/sales/`, { headers: { Authorization: token } },
    );
    return response.data;
  } catch ({ response: { status, data: { message } } }) {
    const errorRes = { status, message };
    throw errorRes;
  }
}

export async function getById(id, token) {
  try {
    const response = await axios.get(
      `${BASE_URL}/sales/${id}`, { headers: { Authorization: token } },
    );
    return response.data;
  } catch ({ response: { status, data: { message } } }) {
    const errorRes = { status, message };
    throw errorRes;
  }
}
