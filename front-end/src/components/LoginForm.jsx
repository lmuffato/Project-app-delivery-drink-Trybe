import React from 'react';

export default function Login() {
  return (
    <form>
      <label htmlFor="input-email">
        <input
          data-testid="common_login__input-email"
          type="email"
          id="input-email"
          name="email"
          placeholder="email@trybe.com.br"
        />
      </label>
      <br />
      <label htmlFor="input-password">
        <input
          data-testid="common_login__input-password"
          type="password"
          id="input-password"
          name="senha"
          placeholder="digite sua senha"
        />
      </label>
      <br />
      <button
        data-testid="common_login__button-login"
        type="button"
      >
        Ainda não tenho conta
      </button>
      <button data-testid="common_login__button-register" type="button">LOGIN</button>
    </form>
  );
}
