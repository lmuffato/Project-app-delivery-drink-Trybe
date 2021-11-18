import React, { useState, useEffect } from 'react';

const errorId = 'admin_manage__element-invalid-register';

function UserForm() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState('Vendedor');
  const [disabled, setDisabled] = useState(true);
  const [existingUserError, setExistingUserError] = useState(false);

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

  const insertNewUser = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(token);
    try {
      const bodyRequest = {
        name: userName,
        email: userEmail,
        password: userPassword,
        role: userRole,
      };

      const newUser = await fetch('http://localhost:3001/admin', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(bodyRequest),
      })
        .then((result) => result.json());
      if (newUser.data) setExistingUserError(true);
      else setExistingUserError(false);
    } catch (erro) {
      console.log(erro);
    }
  };

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
          onClick={ insertNewUser }
        >
          Cadastrar
        </button>
      </fieldset>
      {
        existingUserError
          && <span data-testid={ errorId }>Esse usuário já existe</span>
      }
    </form>
  );
}

export default UserForm;
