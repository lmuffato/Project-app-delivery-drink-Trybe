import React from 'react';
import { Link } from 'react-router-dom';

export default function Cadastro() {
  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="input-name">
          <input
            id="input-name"
            data-testid="common_register__input-name"
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="input-email">
          <input
            id="input-email"
            data-testid="common_register__input-email"
            placeholder="seu email@site.com.br"
          />
        </label>
        <label htmlFor="input-password">
          <input
            id="input-password"
            data-testid="common_register__input-password"
            placeholder="*******"
          />
        </label>
        <Link to="/user">
          <button
            type="button"
            common_register__button-register
          >
            Cadastrar
          </button>
        </Link>
      </form>
    </div>
  );
}
