import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { validateAll } from './ultility';

function NewUserFromAdmin() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [roleInput, setRoleInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  console.log(roleInput);

  useEffect(() => {
    const sucessValidate = validateAll(nameInput, emailInput, passwordInput);
    setIsValid(sucessValidate);
  }, [nameInput, emailInput, passwordInput]);

  const newUserRegister = async (e) => {
    e.preventDefault();
    await axios.post('localhost:3001/register', {
      name: nameInput,
      email: emailInput,
      password: passwordInput,
      role: roleInput,
    });
  };
  return (
    <form method="post">
      <label htmlFor="user-name">
        Name
        <input
          type="text"
          id="user-name"
          className="name-input"
          data-testid="admin_manage__input-name"
          placeholder="Nome e sobrenome"
          onChange={ (e) => setNameInput(e.target.value) }
        />
      </label>
      <label htmlFor="user-email">
        Email
        <input
          type="email"
          id="user-email"
          className="email-input"
          placeholder="exemplo@email.com"
          data-testid="admin_manage__input-email"
          onChange={ (e) => setEmailInput(e.target.value) }
        />
      </label>
      <label htmlFor="user-password">
        Password
        <input
          type="password"
          id="user-password"
          className="pass-input"
          placeholder="*********"
          data-testid="admin_manage__input-password"
          onChange={ (e) => setPasswordInput(e.target.value) }
        />
      </label>
      <label htmlFor="user-type">
        Tipo
        <select
          name="tipo"
          type="text"
          id="user-type"
          data-testid="admin_manage__select-role"
          placeholder="Vendedor/Cliente"
          onChange={ (e) => setRoleInput(e.target.value) }
        >
          <option value="Vendedor">
            Vendedor
          </option>
          <option value="Cliente">
            Cliente
          </option>
        </select>
      </label>
      <button
        type="submit"
        disabled={ !isValid }
        onClick={ (e) => newUserRegister(e) }
        data-testid="admin_manage__button-register"
      >
        Cadastrar
      </button>
    </form>
  );
}

export default NewUserFromAdmin;
