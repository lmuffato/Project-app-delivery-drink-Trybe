import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailValidation from '../validations/loginValidation';
import fetchPostUser from '../services/fetchPostUser';
import ErrorBackend from './ErrorBackend/index';
import redirectRoutes from '../utils/redirectRoutes';

export default function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [errorLogin, setErrorLogin] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = async () => {
    const user = await fetchPostUser(
      { email: emailInput, password: passwordInput },
    );
    if (!user.role) return setErrorLogin(true);
    localStorage.setItem('user', JSON.stringify(user));
    navigate(redirectRoutes[user.role]);
  };

  return (
    <>
      <form>
        <label htmlFor="input-email">
          <input
            data-testid="common_login__input-email"
            type="email"
            id="input-email"
            name="email"
            placeholder="email@trybe.com.br"
            onChange={ (e) => {
              setEmailInput(e.target.value);
              setDisabledBtn(!emailValidation(emailInput, passwordInput));
            } }
          />
        </label>
        <h2>{emailInput}</h2>
        <br />
        <label htmlFor="input-password">
          <input
            data-testid="common_login__input-password"
            type="password"
            id="input-password"
            name="senha"
            placeholder="digite sua senha"
            onChange={ (e) => {
              setPasswordInput(e.target.value);
              setDisabledBtn(!emailValidation(emailInput, passwordInput));
            } }
          />
        </label>
        <h2>{passwordInput}</h2>
        <br />
        <button
          data-testid="common_login__button-login"
          type="button"
          onClick={ handleButtonClick }
          disabled={ disabledBtn }
        >
          LOGIN
        </button>
        <button
          onClick={ () => navigate('/register') }
          data-testid="common_login__button-register"
          type="button"
        >
          Ainda não tenho conta
        </button>
      </form>
      {
        errorLogin ? <ErrorBackend
          datatestid="common_login__element-invalid-email"
          messageError="User not found"
        /> : null
      }
    </>
  );
}
