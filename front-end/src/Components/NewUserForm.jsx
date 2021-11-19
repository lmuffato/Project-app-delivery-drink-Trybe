import React, { useEffect, useState } from 'react';
import validateEmail from '../validations/validateEmail';

export default function NewUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [disableRegisterButton, setDisableRegisterButton] = useState(false);

  const handleChange = (target) => {
    const { id, value } = target;
    if (id === 'user-name') setName(value);
    if (id === 'user-email') setEmail(value);
    if (id === 'user-password') setPassword(value);
    if (id === 'select-role') setRole(value);
  };

  useEffect(() => {
    const validateFields = () => {
      const twelveNumber = 12;
      const sixNumber = 6;
      const validEmail = validateEmail(email);
      const validName = name.length >= twelveNumber;
      const validPassword = password.length >= sixNumber;
      const validRole = role !== '';
      return (validEmail && validName && validPassword && validRole);
    };
    setDisableRegisterButton(validateFields());
  }, [name, email, password, role]);

  return (
    <>
      <h2>Cadastrar Novo Usuário</h2>
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="user-name"
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
            onChange={ (e) => handleChange(e.target) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="user-email"
            placeholder="seu-email@site.com"
            data-testid="admin_manage__input-email"
            onChange={ (e) => handleChange(e.target) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            id="user-password"
            placeholder="********"
            data-testid="admin_manage__input-password"
            onChange={ (e) => handleChange(e.target) }
          />
        </label>
        Tipo
        <select
          value={ role }
          id="select-role"
          data-testid="admin_manage__select-role"
          onChange={ (e) => handleChange(e.target) }
        >
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
          <option value="customer">Cliente</option>
        </select>
        <button
          type="button"
          id="register-button"
          disabled={ !disableRegisterButton }
          data-testid="admin_manage__button-register"
          onClick={ () => console.log(name, email, password, role) }
        >
          CADASTRAR
        </button>
      </form>
    </>
  );
}
