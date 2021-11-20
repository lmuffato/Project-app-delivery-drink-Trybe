import React from 'react'

export default function Admin() {
  return (
    <form>
      <fieldset>
        <label htmlFor="new-user">
          Nome
          <input
            type="text"
            id="new-user"
            data-testid="admin_manage__input-name"
          />
        </label>
        <label htmlFor="new-email">
          Email
          <input
            type="email"
            id="new-email"
            data-testid="admin_manage__input-email"
          />
        </label>
        <label htmlFor="new-password">
          Senha
          <input
            type="password"
            id="new-password"
            data-testid="admin_manage__input-password"
          />
        </label>
        <label htmlFor="new-user-type">
          Tipo
          <select
            id="new-user-type"
            data-testid="admin_manage__select-role"
          >
            <option value="">Vendedor</option>
            <option value="">Administrador</option>
            <option value="">Cliente</option>
          </select>
        </label>
        <button type="submit" data-testid="admin_manage__button-register">
          Cadastrar
        </button>
      </fieldset>
    </form>
  )
}
