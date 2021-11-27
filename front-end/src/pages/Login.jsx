import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { doLogin, getUserByEmail } from '../services/endpointsAPI';
import ErrorLogin from '../Components/ErrorLogin';
import UserContext from '../context/userContext';
import NewOrderContext from '../context/NewOrderContext';
import validateEmail from '../validations/validateEmail';

import {
  setToLocalStorageUser,
  setToLocalStorage,
  getItemFromLocalStorage,
} from '../services/localStorage';

const messageError = 'Login e/ou senha inválidos';
const testId = 'common_login__element-invalid-email';
const testIdEmail = 'common_login__input-email';
const IvalidPassword = 'common_login__input-password';
const testIdBtnLogin = 'common_login__button-login';
const testIdBtnRegister = 'common_login__button-register';

export default function Login() {
  const history = useHistory();
  const { setUserData } = useContext(UserContext);
  const { setUserId } = useContext(NewOrderContext);
  const { setUserName } = useContext(NewOrderContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginButton, setLoginButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState(true);

  const redirectByRole = (role) => {
    if (role === 'customer') { return history.push('/customer/products'); }
    if (role === 'seller') { return history.push('/seller/orders'); }
    if (role === 'administrator') { return history.push('/admin/manage'); }
  };

  const getUserDataFromLocalStorage = async () => {
    const userInfo = await getItemFromLocalStorage('user');
    if (userInfo !== undefined) {
      const login = await getUserByEmail(userInfo.email);
      setUserData(login);
      setUserId(login.id);
      setUserName(login.name);
      return redirectByRole(userInfo.role);
    }
    // console.log('usuário não existe');
  };

  useEffect(() => {
    getUserDataFromLocalStorage();
  }, []);

  const checkRole = (login) => {
    const { role } = jwtDecode(login.token);
    if (role === 'seller') {
      setToLocalStorage('user', login);
      return '/seller/orders';
    }
    if (role === 'administrator') {
      setToLocalStorage('user', login);
      return '/admin/manage';
    }
    setToLocalStorageUser('user', { login, email });
    return '/customer/products';
  };

  const clickLoginButton = async () => {
    try {
      const login = await doLogin(email, password);
      const endpoint = checkRole(login);
      setUserData(login);
      setUserId(login.id);
      setUserName(login.name);
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
