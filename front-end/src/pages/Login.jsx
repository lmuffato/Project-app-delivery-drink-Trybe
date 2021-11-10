import React from 'react';

function Login() {
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
          placeholder="email@tryber.com.br"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          data-testid="common_login__input-password"
          name="password"
          type="password"
          placeholder="*******"
        />
      </label>
      <button
        data-testid="common_login__button-login"
        type="submit"
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
