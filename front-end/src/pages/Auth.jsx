import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import imgManHoldingBeer from '../images/man-holding-beer.png';
import useInputs from '../hooks/useInputs';

export default function Auth() {
  const [, setInputs] = useInputs();
  const history = useHistory();

  function logIn(event) {
    event.preventDefault();
    history.push('/home');
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
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            id="password"
            type="email"
            placeholder="Digite a sua senha"
            onChange={ setInputs }
          />
        </label>
        <button type="submit">Entrar</button>
        <Link to="/register">Ainda não tenho conta</Link>
      </form>
    </>
  );
}
