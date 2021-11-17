import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ErrorLogin from '../Components/ErrorLogin';

import UserContext from '../context/userContext';
import { doLogin } from '../services/endpointsAPI';

const messageError = 'Login e/ou senha inválidos';
const testId = 'common_login__element-invalid-email';

export default function Login() {
  const history = useHistory();
  const { setUserData } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginButton, setLoginButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  // const toggleErrorMessage = (user) => {
  //   if (!user.password || !user.email) {
  //     setErrorMessage(true);
  //   }
  // };

  const clickLoginButton = async () => {
    try {
      const login = await doLogin(email, password);
      setUserData(login);
      history.push('/customer/products');
    } catch (error) {
      setErrorMessage(true);
    }
  };

  useEffect(() => {
    const validateFields = () => {
      const sixDigits = 6;
      const regex = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
      const resultButton = password.length >= sixDigits && regex.test(email);
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
            data-testid="common_login__input-email"
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
            data-testid="common_login__input-password"
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
          data-testid="common_login__button-login"
          type="button"
        >
          LOGIN

        </button>
        <Link to="/register">
          <button
            data-testid="common_login__button-register"
            type="button"
          >
            Ainda não tenho conta

          </button>
        </Link>
      </form>
      {
        errorMessage
        && <ErrorLogin dataTestIdError={ testId } message={ messageError } />
      }
    </div>
  );
}
