import React, { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { userLogin } from '../redux/userSlice';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const url = 'http://localhost:3001';
  const dispatch = useDispatch();
  const store = useStore();
  const history = useHistory();

  const validations = () => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const minPasswordLength = 6;
    if (!emailRegex.test(email) || password.length < minPasswordLength) {
      return true;
    }
    return false;
  };

  const makeLogin = async () => {
    validations();
    await axios
      .post(`${url}/login`, { email, password })
      .then((res) => {
        const { token, role } = res.data;
        dispatch(userLogin({ token, role }));
        console.log(userLogin);
        setShowError(false);
      })
      .catch((err) => setShowError(err));
  };

  const handleLogin = async () => {
    await makeLogin();
    if (store.getState().user.role === 'customer') history.push('/customer/products');
    if (store.getState().user.role === 'administrator') history.push('/admin/manage');
    if (store.getState().user.role === 'seller') history.push('/seller/orders');
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
          disabled={ validations() }
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
        <span
          data-testid="common_login__element-invalid-email"
          style={ { color: 'red' } }
          hidden={ !showError }
        >
          Usuário ou senha inválidos
        </span>
      </form>
    </main>
  );
}
