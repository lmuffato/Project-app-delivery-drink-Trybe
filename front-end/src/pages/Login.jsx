import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ContextDeliveryApp from '../store/ContextDeliveryApp';
import checkEmail from '../services/checkEmail';
import checkPassword from '../services/checkPassword';
import LoginErrorMessage from './components/LoginErrorMessage';
import fetchLogin from '../services/fetchLogin';

import './styles/loginStyle.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableButton, setEnableButton] = useState(true);
  const [loginError, setLoginError] = useState('');
  const { setUser } = useContext(ContextDeliveryApp);
  const history = useHistory();

  useEffect(() => {
    if (checkEmail(email) && checkPassword(password)) {
      setEnableButton(false);
    } else {
      setEnableButton(true);
    }
  }, [email, password]);

  const handleLoginButtonClick = async (e) => {
    e.preventDefault();
    const response = await fetchLogin(email, password);
    if (response.token !== undefined) {
      console.log(response.token);
      setUser(response);
      localStorage.setItem('user', JSON.stringify(response));
      setLoginError('');
      if (response.role === 'customer') {
        history.push('/customer/products');
      } else if (response.role === 'seller') {
        history.push('/seller/orders');
      } else if (response.role === 'administrator') {
        history.push('/admin/manage');
      }
    } else {
      setLoginError(response.message);
    }
  };

  const handleRegisterButtonClick = () => {
    history.push('/register');
  };

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user'));
    if (userLocalStorage) {
      setUser(userLocalStorage);
      history.push('/customer/products');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="login-container">
      <h1 className="login-title">
        Login
      </h1>
      <form className="login-form">
        <label htmlFor="email-input" className="login-email-label">
          <input
            id="email-input"
            type="text"
            placeholder="Your@email.here"
            data-testid="common_login__input-email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            className="login-username"
          />
        </label>

        <label htmlFor="password-input" className="login-password-input">
          <input
            id="password-input"
            type="password"
            placeholder="Password"
            data-testid="common_login__input-password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            className="login-password"
          />
        </label>
        <button
          id="login-btn"
          type="submit"
          disabled={ enableButton }
          data-testid="common_login__button-login"
          onClick={ handleLoginButtonClick }
          className="login-btn"
        >
          Login
        </button>
        <button
          id="register-btn"
          type="button"
          data-testid="common_login__button-register"
          onClick={ handleRegisterButtonClick }
          className="login-register-btn"
        >
          Ainda não tenho conta
        </button>
        { loginError
          ? <LoginErrorMessage errorMessage={ loginError } />
          : ''}
      </form>
    </div>
  );
}

export default Login;

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
