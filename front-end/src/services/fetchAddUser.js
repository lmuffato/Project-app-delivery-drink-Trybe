import axios from 'axios';

const fetchAddUser = async (token, { name, email, password, role }) => {
  const response = await axios.post('http://localhost:3001/addUser', { name, email, password, role },
    { headers: { Authorization: token } });
  return response;
};

export default fetchAddUser;
