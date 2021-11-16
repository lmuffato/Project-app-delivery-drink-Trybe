import React, { useState } from 'react';
import { useSnackbar } from 'react-simple-snackbar';
import { useHistory, Redirect } from 'react-router-dom';
import { loginApi } from '../API/dataBaseCall';

export default function Login() {
  const [openSnackbar] = useSnackbar();
  const history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleChange = ({ target }, handle) => {
    const { value } = target;
    handle(value);
  };
  const tokenStorage = ({ token }) => {
    localStorage.setItem('token', token);
  };
  const handleLogin = async () => loginApi(user, password).then((data) => {
    tokenStorage(data);
    setRedirect(true);
  }).catch(openSnackbar);

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
          type="submit"
          data-testid="common_login__button-login"
          onClick={ (event) => {
            event.preventDefault();
            handleLogin();
          } }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          CADASTRE-SE
        </button>
        {redirect && <Redirect to="/customer/products" />}
      </form>
    </div>
  );
}
