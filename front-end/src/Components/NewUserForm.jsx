import React, { useContext, useEffect, useState } from 'react';
import validateEmail from '../validations/validateEmail';
import UserContext from '../context/userContext';

import { createNewUserByAdmin } from '../services/endpointsAPI';
import ErrorLogin from './ErrorLogin';

const testId = 'admin_manage__element-invalid-register';
const messageError = 'Usuário já cadastrado ou Token inválido!';

export default function NewUserForm() {
  const { userData } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [disableRegisterButton, setDisableRegisterButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState(true);

  const handleChange = (target) => {
    const { id, value } = target;
    if (id === 'user-name') setName(value);
    if (id === 'user-email') setEmail(value);
    if (id === 'user-password') setPassword(value);
    if (id === 'select-role') setRole(value);
  };

  const createUser = async () => {
    try {
      const { token } = userData;
      const result = await createNewUserByAdmin({ name, email, password, role, token });
      if (result) {
        setName('');
        setEmail('');
        setPassword('');
        setRole('');
        setErrorMessage(true);
      }
    } catch (error) {
      setErrorMessage(false);
    }
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
  }, [name, email, password, role, errorMessage]);

  return (
    <main>
      <h2>Cadastrar Novo Usuário</h2>
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="user-name"
            value={ name }
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
            value={ email }
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
            value={ password }
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
          <option value="">Selecione</option>
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
          <option value="administrator">Administrador</option>
        </select>
        <button
          type="button"
          id="register-button"
          disabled={ !disableRegisterButton }
          data-testid="admin_manage__button-register"
          onClick={ createUser }
        >
          CADASTRAR
        </button>
      </form>
      <div hidden={ errorMessage }>
        <ErrorLogin dataTestIdError={ testId } message={ messageError } />
      </div>
    </main>
  );
}
