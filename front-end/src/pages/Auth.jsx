import React from 'react';
import { Link } from 'react-router-dom';
import imgManHoldingBeer from '../images/man-holding-beer.png';

export default function Auth() {
  return (
    <>
      <img src={ imgManHoldingBeer } alt="Homem sorrindo e segurando caneca de cerveja" />
      <img src="./logo-compact.svg" alt="tchau problema" />
      <form>
        <label htmlFor="email">
          E-mail:
          <input id="email" type="email" placeholder="Digite o seu e-mail" />
        </label>
        <label htmlFor="password">
          Senha:
          <input id="password" type="email" placeholder="Digite a sua senha" />
        </label>
        <button type="submit">Entrar</button>
        <Link to="/register">Ainda não tenho conta</Link>
      </form>
    </>
  );
}
