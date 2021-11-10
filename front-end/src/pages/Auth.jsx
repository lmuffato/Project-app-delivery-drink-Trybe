import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import imgManHoldingBeer from '../images/man-holding-beer.png';
import useInputs from '../hooks/useInputs';
import loginSchema from '../schemas/login';

export default function Auth() {
  const [values, setInputs] = useInputs({ email: '', password: '' });
  const [schemaStatus, setSchemaStatus] = useState({ valid: false, error: '' });
  const history = useHistory();

  useEffect(() => {
    const { error } = loginSchema.validate(values);
    setSchemaStatus({ valid: error === undefined, error: error ? error.message : '' });
  }, [values]);

  function logIn(event) {
    event.preventDefault();
    try {
      if (!schemaStatus.valid) throw new Error(schemaStatus.error);
      history.push('/home');
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <img src={ imgManHoldingBeer } alt="Homem sorrindo e segurando caneca de cerveja" />
      <img src="./logo-compact.svg" alt="tchau problema" />
      <form onSubmit={ logIn }>
        <label htmlFor="email">
          E-mail:
          <input
            id="email"
            type="email"
            placeholder="Digite o seu e-mail"
            onChange={ setInputs }
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            id="password"
            type="password"
            placeholder="Digite a sua senha"
            onChange={ setInputs }
            data-testid="common_login__input-password"
          />
        </label>
        <button type="submit" data-testid="common_login__button-login">Entrar</button>
        <Link to="/register" data-testid="common_login__button-register">
          Ainda não tenho conta
        </Link>
      </form>
    </>
  );
}
