/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-bracket-spacing */
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../contexts/Login';

const minPassLength = 6;

const isValidEmail = (email) => /\w+@\w+\.\w+/gi.test(email);
const isValidPassword = (password) => password.length >= minPassLength;
function Login() {
  const { values, setValues } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    setValues({
      ...values,
      buttonStatus:
        isValidEmail(values.email) && isValidPassword(values.password),
      errorMessage: null,
    });
  }, [ values.email, values.password]);

  const onChange = (event) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = values;
    try {
      const { data: { token, name, role, id } } = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });
      localStorage.setItem('user', JSON.stringify({ id, name, email, role, token }));
      setValues({
        ...values,
        name,
        role,
        id,
      });
      if (role === 'administrator') {
        navigate('/admin/manage', { replace: true });
      } else if (role === 'seller') {
        navigate('/seller/products', { replace: true });
      } else {
        navigate('/customer/products', { replace: true });
      }
    } catch ({ response }) {
      // Source: https://stackoverflow.com/questions/45017822/catching-error-body-using-axios-post
      if (!response) {
        return <h1>Error</h1>;
      }
      setValues({
        ...values,
        errorMessage: response.data.data,
      });
    }
  };

  const reditectToResgister = (event) => {
    event.preventDefault();
    navigate('/register');
  };

  return (
    <form onSubmit={ onSubmit }>
      <img src="#" alt="Logotipo" />
      <h1>Nome do app</h1>
      <label htmlFor="email">
        Login
        <input
          data-testid="common_login__input-email"
          name="email"
          type="email"
          value={ values.email }
          onChange={ onChange }
          required
          placeholder="email@tryber.com.br"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          data-testid="common_login__input-password"
          name="password"
          type="password"
          value={ values.password }
          onChange={ onChange }
          placeholder="*******"
          required
        />
      </label>
      <button
        data-testid="common_login__button-login"
        type="submit"
        disabled={ !values.buttonStatus }
      >
        LOGIN
      </button>
      <button
        data-testid="common_login__button-register"
        type="submit"
        onClick={ reditectToResgister }
      >
        Ainda não tenho conta
      </button>
      <span data-testid="common_login__element-invalid-email">
        { values.errorMessage }
      </span>
    </form>
  );
}

export default Login;
