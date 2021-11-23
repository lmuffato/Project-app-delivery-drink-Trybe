import React, { useState } from 'react';
import genHashMd5 from 'md5';
import emailValidation from '../validations/loginValidation';
import api from '../services/api';

export default function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [userDatafromAPI, setUserDatafromAPI] = useState('');

  const fetchPostData = async (userData) => {
    try {
      const data = await api.get('/user/email', userData);
      setUserDatafromAPI(data);
      // setMessageErrorBackend(false);
    } catch (error) {
      const { data } = error.response;
      // setMessageErrorBackend(data.message);
      console.log(data.message);
    }
    console.log(userDatafromAPI);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const passwordHash = genHashMd5(passwordInput);
    fetchPostData({ email: emailInput, password: passwordHash });
  };

  // if userDatafromAPI salesman, client, administrator

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
        onClick={ handleButtonClick }
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
