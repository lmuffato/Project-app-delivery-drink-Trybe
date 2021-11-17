import Axios from 'axios';

function postLogin(userData) {
  const { email, password } = userData;

  console.log('service front:', userData);

  Axios.post('http://localhost:3001/login', {
    email,
    password,
  });
}

export default postLogin;
