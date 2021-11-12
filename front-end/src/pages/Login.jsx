import React from 'react';

function Login() {
  return (
    <div>
      Login
      <input
        type="email"
        data-testid="common_login__input-email"
      />
      Senha
      <input
        type="password"
        data-testid="common_login__input-password"
      />
      <button
        data-testid="common_login__button-login"
        type="button"
      >
        LOGIN
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>
      <p data-testid="common_login__element-invalid-email">
        Erro
      </p>
    </div>
  );
}

export default Login;
