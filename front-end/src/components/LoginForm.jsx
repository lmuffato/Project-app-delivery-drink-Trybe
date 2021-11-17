import React, { useState } from 'react';
import emailValidation from '../validations/loginValidation';

export default function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);

  /* const handleButtonClick = () => {
  }; */

  return (
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
        onClick={ () => handleButtonClick() }
        disabled={ disabledBtn }
      >
        LOGIN
      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
      >
        Ainda não tenho conta
      </button>
    </form>
  );
}
