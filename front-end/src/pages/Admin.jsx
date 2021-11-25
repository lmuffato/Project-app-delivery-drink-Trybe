import React, { useState, useEffect } from 'react';
import SellerHeader from '../components/SellerHeader';
import { createUserByAdmin } from '../services/apis';

function Admin() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [select, setSelect] = useState('seller');
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'userName') setUserName(value);
    if (name === 'password') setPassword(value);
    if (name === 'email') setEmail(value);
    if (name === 'select') setSelect(value);
  };

  const registerUser = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    try {
      const obj = {
        name: userName,
        email,
        password,
        role: select,
        token,
      };
      await createUserByAdmin(obj);
      setErrorMessage(false);
      // history.push('/customer/products');
    } catch (error) {
      setErrorMessage(true);
    }
  };

  useEffect(() => {
    const validateEmail = /^[\S]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/g.test(email);
    const PASSWORD_LENGTH = 6;
    const NAME_LENGTH = 12;

    if (validateEmail
       && password.length >= PASSWORD_LENGTH
       && userName.length >= NAME_LENGTH
       && select) {
      setDisabled(false);
    } else { setDisabled(true); }
  }, [email, password, userName, select]);

  const createSelect = () => (
    <label htmlFor="select">
      <p>Tipo</p>
      <select
        id="select"
        name="select"
        data-testid="admin_manage__select-role"
        onChange={ handleChange }
      >
        <option value="seller">Vendedor</option>
        <option value="customer">Cliente</option>
        <option value="admin">Administrador</option>
      </select>
    </label>
  );

  return (
    <div>
      <SellerHeader />
      <div>
        Cadastrar novo usuário
        <div>
          <label htmlFor="nameInput">
            Nome:
            <input
              data-testid="admin_manage__input-name"
              id="nameInput"
              placeholder="Nome e Sobrenome"
              value={ userName }
              onChange={ handleChange }
              name="userName"
            />
          </label>
          <label htmlFor="email">
            <p>Email:</p>
            <input
              type="text"
              id="email"
              data-testid="admin_manage__input-email"
              name="email"
              value={ email }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="password">
            <p>Senha:</p>
            <input
              type="password"
              id="password"
              data-testid="admin_manage__input-password"
              name="password"
              value={ password }
              onChange={ handleChange }
            />
          </label>
          { createSelect() }
        </div>
      </div>
      <button
        type="button"
        data-testid="admin_manage__button-register"
        onClick={ registerUser }
        disabled={ disabled }
      >
        CADASTRAR
      </button>
      { errorMessage && (
        <p data-testid="admin_manage__element-invalid-register">
          Usuário já registrado
        </p>
      ) }
    </div>
  );
}

export default Admin;
