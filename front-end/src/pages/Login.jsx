import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import ErrorLogin from '../Components/ErrorLogin';

import UserContext from '../context/userContext';
import { doLogin } from '../services/endpointsAPI';

import { setToLocalStorageUser } from '../services/localStorage';
import validateEmail from '../validations/validateEmail';

const messageError = 'Login e/ou senha inválidos';
const testId = 'common_login__element-invalid-email';
const testIdEmail = 'common_login__input-email';
const IvalidPassword = 'common_login__input-password';
const testIdBtnLogin = 'common_login__button-login';
const testIdBtnRegister = 'common_login__button-register';

export default function Login() {
  const history = useHistory();
  const { setUserData } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginButton, setLoginButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState(true);

  const checkRole = (token) => {
    const { role } = jwtDecode(token);
    return role === 'administrator' ? '/admin/manage' : '/customer/products';
  };

  const clickLoginButton = async () => {
    try {
      const login = await doLogin(email, password);
      const { token } = login;
      const endpoint = checkRole(token);
      setToLocalStorageUser('user', { login, email });
      setUserData(login);
      setErrorMessage(true);
      history.push(endpoint);
    } catch (error) {
      setErrorMessage(false);
    }
  };

  useEffect(() => {
    const validateFields = () => {
      const sixDigits = 6;
      const validEmail = validateEmail(email);
      const resultButton = password.length >= sixDigits && validEmail;
      setLoginButton(resultButton);
    };
    validateFields();
  }, [email, password]);

  return (
    <div>
      <form>
        <label htmlFor="login">
          Login
          <input
            data-testid={ testIdEmail }
            type="email"
            id="email"
            placeholder="email@trybeer.com.br"
            onChange={ (e) => setEmail(e.target.value) }
            required
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            data-testid={ IvalidPassword }
            type="password"
            id="senha"
            placeholder="*********"
            onChange={ (e) => setPassword(e.target.value) }
            required
          />
        </label>
        <button
          variant="primary"
          disabled={ !loginButton }
          onClick={ clickLoginButton }
          data-testid={ testIdBtnLogin }
          type="button"
        >
          LOGIN

        </button>
        <Link to="/register">
          <button
            data-testid={ testIdBtnRegister }
            type="button"
          >
            Ainda não tenho conta

          </button>
        </Link>
      </form>
      <div hidden={ errorMessage }>
        <ErrorLogin dataTestIdError={ testId } message={ messageError } />
      </div>
    </div>
  );
}
