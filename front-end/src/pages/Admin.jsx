import React, { useEffect, useState } from 'react';

const axios = require('axios');

export default function Admin() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState('seller');
  const [disabled, setDisabled] = useState(true);
  const url = 'http://localhost:3001';

  useEffect(() => {
    const verifyInfo = () => {
      const regex = /\S+@\S+\.\S+/;
      const minimumNameLength = 12;
      const minimumPasswordLength = 6;
      if (userName.length >= minimumNameLength
        && userPassword.length >= minimumPasswordLength
        && regex.test(userEmail)
        && userRole) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
    verifyInfo();
  }, [userEmail, userName.length, userPassword.length, userRole]);

  const insertUser = async () => {
    const token = JSON.parse(localStorage.getItem('user').token);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const bodyParameters = {
        name: userName,
        email: userEmail,
        password: userPassword,
        role: userRole,
      };
      await axios
        .post(`${url}/admin`, bodyParameters, config)
        .then((res) => res.json());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <fieldset>
        <label htmlFor="new-user">
          Nome
          <input
            type="text"
            id="new-user"
            data-testid="admin_manage__input-name"
            onChange={ (e) => setUserName(e.target.value) }
          />
        </label>
        <label htmlFor="new-email">
          Email
          <input
            type="email"
            id="new-email"
            data-testid="admin_manage__input-email"
            onChange={ (e) => setUserEmail(e.target.value) }
          />
        </label>
        <label htmlFor="new-password">
          Senha
          <input
            type="password"
            id="new-password"
            data-testid="admin_manage__input-password"
            onChange={ (e) => setUserPassword(e.target.value) }
          />
        </label>
        <label htmlFor="new-user-type">
          Tipo
          <select
            id="new-user-type"
            data-testid="admin_manage__select-role"
            defaultValue={ userRole }
            onChange={ (e) => setUserRole(e.target.value) }
          >
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
            <option value="customer">Cliente</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ disabled }
          onClick={ insertUser }
        >
          Cadastrar
        </button>
      </fieldset>
    </form>
  );
}
