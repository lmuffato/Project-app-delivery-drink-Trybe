import axios from 'axios';

export const loginAfterRegistering = async (email, password) => {
  let loggedInUser;
  await axios
    .post('http://localhost:3001/login', { email, password })
    .then((res) => {
      const { name, role, token } = res.data;
      localStorage.setItem('user', JSON.stringify({ name, email, role, token }));
      loggedInUser = { token, role };
    }).catch((error) => console.error(error));
  return loggedInUser;
};

export const ok = () => 'Ok';
