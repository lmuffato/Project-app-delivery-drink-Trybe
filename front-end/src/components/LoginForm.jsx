import React, { useState } from 'react';
import genHashMd5 from 'md5';
import { Link, useNavigate } from 'react-router-dom';
import emailValidation from '../validations/loginValidation';
import api from '../services/api';
import ErrorBackend from './ErrorBackend/index';

export default function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [errorLogin, setErrorLogin] = useState(false);

  // o email value do db, este restorno da requisição vai definir o evento de redirecionamento
  // const errorLoginHTTP = 200;
  const navegate = useNavigate();
  const fetchPostData = async (userData) => {
    const data = await api.post('/user/login', userData);
    const condition = await Object.keys(data.data);
    console.log(condition);
    if (condition.length === 1) {
      console.log('dentro if');
      setErrorLogin(true);
    } else {
      localStorage.setItem('user', JSON.stringify(data.data));
      const redirectRoutes = {
        customer: '/customer/products',
        seller: '/seller/orders',
        administrator: '/admin/manage',
      };
      navegate(redirectRoutes[data.data.role]);
    }
  };

  const handleButtonClick = async () => {
    const passwordHash = genHashMd5(passwordInput);
    await fetchPostData({ email: emailInput, password: passwordHash });
    console.log('handleButtonClick');
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
        <Link to="/register" data-testid="common_login__button-register">
          Ainda não tenho conta
        </Link>
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
