import React from 'react';

function RegisterForm() {
  return (
    <div>
      <form>
        <label htmlFor="user-name">
          Nome
          <input type="text" id="user-name" data-testid="common_register__input-name" />
        </label>
        <label htmlFor="user-email">
          Email
          <input type="text" id="user-email" data-testid="common_register__input-email" />
        </label>
        <label htmlFor="user">
          Senha
          <input
            type="password"
            id="user-password"
            data-testid="common_register__input-password"
          />
        </label>
        <button
          type="button"
          data-testid="common_register__button-register"
        >
          Cadastrar
        </button>
      </form>
      <p
        data-testid={ `common_register__element-invalid_register 
        [Elemento oculto (Mensagens de erro)]` }
      >
        elemento oculto
      </p>
    </div>
  );
}

export default RegisterForm;
