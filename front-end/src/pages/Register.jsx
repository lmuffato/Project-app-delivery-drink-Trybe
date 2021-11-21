import React from 'react';

export default function Register() {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const minPasswordLength = 6;
  const minNameLength = 15;

  const validations = () => {
    const btnRegister = document.getElementById('register-btn');
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;
    const nameValue = document.getElementById('name').value;

    if (!emailRegex.test(emailValue) || passwordValue.length < minPasswordLength
    || nameValue.length < minNameLength) {
      btnRegister.disabled = true;
    } else {
      btnRegister.disabled = false;
    }
  };

  const handleRegister = () => {
    console.log('Registrando...');
  };

  // const handleInput = () => {
  //   validations();
  // };

  return (
    <main>
      <label htmlFor="name">
        Nome:
        <input
          id="name"
          type="text"
          placeholder="Insira seu nome: "
          data-testid="common_register__input-name"
          onChange={ validations }
          required
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          id="email"
          type="email"
          placeholder="Insira seu email: "
          data-testid="common_register__input-email"
          onChange={ validations }
          required
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          id="password"
          type="password"
          placeholder="Insira sua senha: "
          data-testid="common_register__input-password"
          onChange={ validations }
          required
        />
      </label>
      <button
        id="register-btn"
        type="button"
        data-testid="common_register__button-register"
        disabled
        onClick={ handleRegister }
      >
        Cadastrar
      </button>
      <span
        id="span-error"
        data-testid="common_register__element-invalid_register"
      />
    </main>
  );
}
