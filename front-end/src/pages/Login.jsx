import React, { useState, useEffect } from 'react';

const initialState = () => (
  { email: '', password: '', buttonStatus: true, errorMessage: '' }
);

const minPassLength = 6;

const isValidEmail = (email) => /\w+@\w+\.\w+/gi.test(email);
const isValidPassword = (password) => password.length >= minPassLength;
function Login() {
  const [values, setValues] = useState(initialState);
  // const [error, setErrors] = useState(null);

  useEffect(() => {
    setValues({
      ...values,
      buttonStatus: isValidEmail(values.email) && isValidPassword(values.password),
    });
  }, [values.email, values.password]);

  const onChange = (event) => {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form>
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
      >
        Ainda não tenho conta
      </button>
      <span data-testid="common_login__element-invalid-email" />
    </form>
  );
}

export default Login;
