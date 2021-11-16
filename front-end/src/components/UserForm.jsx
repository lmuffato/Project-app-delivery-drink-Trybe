import React, { useState, useEffect } from 'react';

function UserForm() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState('Vendedor');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const verifyInfo = () => {
      const regex = /\S+@\S+\.\S+/;
      const minimumNameLength = 12;
      const minimumPasswordLength = 6;
      if (userName.length >= minimumNameLength
        && regex.test(userEmail)
        && userPassword.length >= minimumPasswordLength
        && userRole) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };

    verifyInfo();
  }, [userEmail, userName.length, userPassword.length, userRole]);

  return (
    <form>
      <fieldset>
        <label htmlFor="new-user-name">
          Nome
          <input
            type="text"
            id="new-user-name"
            data-testid="admin_manage__input-name"
            onChange={ (e) => setUserName(e.target.value) }
          />
        </label>
        <label htmlFor="new-user-email">
          Email
          <input
            type="text"
            id="new-user-email"
            data-testid="admin_manage__input-email"
            onChange={ (e) => setUserEmail(e.target.value) }
          />
        </label>
        <label htmlFor="new-user-password">
          Senha
          <input
            type="password"
            id="new-user-password"
            data-testid="admin_manage__input-password"
            onChange={ (e) => setUserPassword(e.target.value) }
          />
        </label>
        <label htmlFor="new-user-type">
          Tipo
          <select
            name="new-user-type"
            id="new-user-type"
            data-testid="admin_manage__select-role"
            defaultValue="Vendedor"
            onChange={ (e) => setUserRole(e.target.value) }
          >
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
            <option value="customer">Cliente</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ disabled }
          onClick={ () => console.log('Teste') }
        >
          Cadastrar
        </button>
      </fieldset>
    </form>
  );
}

export default UserForm;
