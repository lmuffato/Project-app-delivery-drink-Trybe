import React from 'react';

function SignUp() {
  return (
    <div>
      <h1>Cadastre-se</h1>
      <form>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Seu nome"
          data-testid="common_register__input-name"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email"
          data-testid="common_register__input-email"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite uma senha"
          data-testid="common_register__input-password"
        />

        <button
          type="submit"
          data-testid="common_register__button-register"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default SignUp;
