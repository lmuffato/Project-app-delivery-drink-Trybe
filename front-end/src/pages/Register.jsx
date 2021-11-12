import React from 'react';

function Register() {
  return (
    <div>
      Nome
      <input
        type="text"
        data-testid="common_register__input-name"
        placeholder="Digite seu nome"
      />
      Email
      <input
        type="email"
        data-testid="common_register__input-email"
        placeholder="Digite seu e-mail"
      />
      <input
        type="password"
        data-testid="common_register__input-password"
        placeholder="Digite sua senha"
      />
      <button
        type="button"
        data-testid="common_register__button-register"
      >
        CADASTRAR
      </button>
      <p data-testid="common_register__element-invalid_register">
        Erro
      </p>
    </div>
  );
}

export default Register;
