import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { userLogin } from '../redux/userSlice';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = 'http://localhost:3000';
  const dispatch = useDispatch();
  const history = useHistory();
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const minPasswordLength = 6;

  const validations = () => {
    if (!emailRegex.test(email)) return 'Please enter a valid email';
    if (password.length < minPasswordLength) return 'Please enter a valid password';
    return '';
  };

  const makeLogin = async () => {
    validations();
    await axios
      .post(`${url}/login`, { email, password })
      .then((res) => {
        const { token, role } = res.data;
        dispatch(userLogin({ token, role }));
      })
      .catch((er) => console.log(er));
  };
  const handleLogin = async () => {
    await makeLogin();
    history.push('/');
  };

  return (
    <main>
      <form>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="email"
            placeholder="Insira seu email: "
            data-testid="common_login__input-email"
            onChange={ (e) => setEmail(e.target.value) }
            required
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            id="password"
            type="password"
            value={ password }
            placeholder="Insira sua senha: "
            data-testid="common_login__input-password"
            onChange={ (e) => setPassword(e.target.value) }
            required
          />
        </label>
        <button
          type="button"
          data-testid="common_login__button-login"
          onClick={ handleLogin }
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
    </main>
  );
}
