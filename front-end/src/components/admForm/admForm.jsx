import React from 'react';

function AdmForm() {
  return (
    <div style={ { display: 'flex' } }>
      <form
        style={
          {
            position: 'fixed',
            marginTop: '100px',
            flexDirection: 'row',
          }
        }
      >
        <label htmlFor="nameInput">
          Nome
          <input type="text" id="nameInput" data-testId="admin_manage__input-name" />
        </label>
        <label htmlFor="emailInput">
          Email
          <input type="text" id="emailInput" data-testId="admin_manage__input-email" />
        </label>
        <label htmlFor="passwordInput">
          Senha
          <input
            type="password"
            id="passwordInput"
            data-testId="admin_manage__input-password"
          />
        </label>
        <select data-testId="admin_manage__select-role">
          Tipo
          <option>Vendedor</option>
        </select>
        <button type="button" data-testId="admin_manage__button-register">Cadastrar</button>
      </form>
    </div>
  );
}

export default AdmForm;
