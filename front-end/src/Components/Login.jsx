import React from 'react';

export default function Login() {
  return (
    <div>
      <form>
        <label htmlFor="login">
          Login
          <input
            data-testid="common_login__input-email"
            type="email"
            id="email"
            placeholder="email@trybeer.com.br"
            required
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            data-testid="common_login__input-password"
            type="password"
            id="senha"
            placeholder="*********"
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="button"
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
    </div>
  );
}
