import React from 'react';

const Register = () => (
  <div>
    <h1>Cadastro</h1>
    <form>
      <label htmlFor="inputName">
        Nome
        <input
          data-testid="common_register__input-name"
          name="inputName"
        />
      </label>
      <label htmlFor="inputEmail">
        Email
        <input
          id="input"
          data-testid="common_register__input-email"
          name="inputEmail"
        />
      </label>
      <label htmlFor="inputPassword">
        Senha
        <input
          id="input"
          data-testid="common_register__input-password"
          name="inputPassword"
        />
      </label>
      <button
        type="button"
        data-testid="common_register__button-register"
      >
        Cadastrar
      </button>
    </form>
  </div>
);

export default Register;
