import React from 'react';

export default function Login() {
  return (
    <form>
      <label htmlFor="input-email">
        <input
          data-testid="email-input"
          type="email"
          id="input-email"
          name="email"
          placeholder="email@trybe.com.br"
        />
      </label>
      <br />
      <label htmlFor="input-password">
        <input
          data-testid="password-input"
          type="password"
          id="input-password"
          name="senha"
          placeholder="digite sua senha"
        />
      </label>
      <br />
      <button type="button">Ainda não tenho conta</button>
      <button type="button">LOGIN</button>
    </form>
  );
}
