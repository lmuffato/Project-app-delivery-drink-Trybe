import React, { useState } from 'react';

import { useHistory, Redirect } from 'react-router-dom';

const axios = require('axios').default;

export default function Login() {
  const history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);
  const [redirect, setRedirect] = useState(false);
  // const [disableButton, setDisableButton] = useState(true);

  const handleChange = ({ target }, handle) => {
    const { value } = target;
    handle(value);
  };
  const tokenStorage = (lgUser) => {
    localStorage.setItem('user', JSON.stringify(lgUser));
  };
  const handleLogin = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/users/login/',
        data: {
          password,
          email: user,
        },
        responseType: 'json',
      });
      tokenStorage(response.data);
      setRedirect(true);
    } catch (error) {
      setErrorLogin(true);
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          data-testid="common_login__input-email"
          placeholder="Email"
          name="email"
          value={ user }
          onChange={ (e) => handleChange(e, setUser) }
        />
        <input
          type="password"
          data-testid="common_login__input-password"
          placeholder="Senha"
          value={ password }
          onChange={ (e) => handleChange(e, setPassword) }
          name="senha"
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          onClick={ () => {
            handleLogin();
          } }
        >
          LOGIN
        </button>
        {errorLogin ? <p>Login Falhou</p> : null }
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          CADASTRE-SE
        </button>
        {redirect ? <Redirect to="/customer/products" /> : null}
      </form>
    </div>
  );
}
