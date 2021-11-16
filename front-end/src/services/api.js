import axios from 'axios';

const { REACT_APP_BASE_API } = process.env;

export default axios.create({
  baseURL: REACT_APP_BASE_API || 'http://localhost:3001/',
});
