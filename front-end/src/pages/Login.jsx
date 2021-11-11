import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../store/ContextDeliveryApp';
import checkEmail from '../services/checkEmail';
import checkPassword from '../services/checkPassword';
import LoginErrorMessage from './components/LoginErrorMessage';
import fetchLogin from '../services/fetchLogin';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableButton, setEnableButton] = useState(true);
  const [loginError, setLoginError] = useState('');
  const { setToken } = useContext(ContextDeliveryApp);

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
      setToken(response.token);
      setLoginError('');
      if (response.role === 'customer') {
        history.push('/customer/products');
      } else if (response.role === 'seller') {
        history.push('/seller/orders');
      } else if (response.role === 'administrator') {
        history.push('/admin/manage');
      }
    } else {
      console.log(response.message);
      console.log(typeof response.message);
      setLoginError(response.message);
    }
  };

  const handleRegisterButtonClick = () => {
    history.push('/register');
  };

  return (
    <div>
      <h1>
        Login
      </h1>
      <form>
        <label htmlFor="email-input">
          <input
            id="email-input"
            type="text"
            placeholder="Your@email.here"
            data-testid="common_login__input-email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>

        <label htmlFor="password-input">
          <input
            id="password-input"
            type="password"
            placeholder="Password"
            data-testid="common_login__input-password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>

        <label htmlFor="login-btn">
          <input
            id="login-btn"
            type="button"
            placeholder="Login"
            disabled={ enableButton }
            data-testid="common_login__button-login"
            onClick={ handleLoginButtonClick }
          />
        </label>

        <label htmlFor="register-btn">
          Login
          <input
            id="register-btn"
            type="button"
            placeholder="Ainda não tenho conta"
            data-testid="common_login__button-register"
            onClick={ handleRegisterButtonClick }
          />
        </label>
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
