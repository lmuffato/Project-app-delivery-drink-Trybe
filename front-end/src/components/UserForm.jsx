import React from 'react';

function UserForm() {
  return (
    <form>
      <fieldset>
        <label htmlFor="new-user-name">
          Nome
          <input
            type="text"
            id="new-user-name"
            data-testid="admin_manage__input-name"
          />
        </label>
        <label htmlFor="new-user-email">
          Email
          <input
            type="text"
            id="new-user-email"
            data-testid="admin_manage__input-email"
          />
        </label>
        <label htmlFor="new-user-password">
          Senha
          <input
            type="text"
            id="new-user-password"
            data-testid=" admin_manage__input-password"
          />
        </label>
        <label htmlFor="new-user-type">
          Tipo
          <select
            name="new-user-type"
            id="new-user-type"
            data-testid="admin_manage__select-role"
          >
            <option value="">Vendedor</option>
            <option value="">Administrador</option>
            <option value="">Cliente</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
        >
          Cadastrar
        </button>
      </fieldset>
    </form>
  );
}

export default UserForm;
