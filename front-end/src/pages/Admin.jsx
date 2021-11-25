import React, { useEffect, useState, useCallback } from 'react';
/* import NavBar from '../components/NavBar'; */
const axios = require('axios');

export default function Admin() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState('seller');
  const [disabled, setDisabled] = useState(true);
  const [invalidRegister, setInvalidRegister] = useState(false);
  const url = 'http://localhost:3001';
  const minimumNameLength = 12;
  const minimumPasswordLength = 6;

  const verifyInfo = useCallback(
    () => {
      const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (userName.length >= minimumNameLength
        && userPassword.length >= minimumPasswordLength
        && regex.test(userEmail)
        && userRole) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    },
    [userEmail, userName.length, userPassword.length, userRole, setDisabled],
  );

  useEffect(() => {
    verifyInfo();
  }, [verifyInfo]);

  const insertUser = async (e) => {
    e.preventDefault();
    const { token } = JSON.parse(localStorage.getItem('user'));

    const config = {
      headers: { Authorization: `${token}` },
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
        .then((res) => console.log(res.data));
      setUserName('');
      setUserEmail('');
      setUserPassword('');
      setUserRole('');
    } catch (error) {
      console.log(error);
      setInvalidRegister(true);
    }
  };

  return (
    <main>
      <form>
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
          onClick={ (e) => insertUser(e) }
        >
          Cadastrar
        </button>
        { invalidRegister
          && (
            <span data-testid="admin_manage__element-invalid-register">
              Usuário invalido ou já cadastrado
            </span>
          ) }
      </form>
    </main>
  );
}
