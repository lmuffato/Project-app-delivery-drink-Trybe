import React, { useState, useEffect, useContext } from 'react';
import checkEmail from '../../services/checkEmail';
import checkName from '../../services/checkName';
import checkPassword from '../../services/checkPassword';
import fetchAddUser from '../../services/fetchAddUser';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';

export default function InsertUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [enableButton, setEnableButton] = useState(true);
  const [registerError, setRegisterError] = useState('');
  const { user } = useContext(ContextDeliveryApp);

  useEffect(() => {
    if (checkEmail(email) && checkPassword(password) && checkName(name)) {
      setEnableButton(false);
    } else {
      setEnableButton(true);
    }
  }, [name, email, password]);

  const handleClick = async () => {
    const { token } = user;
    try {
      const response = await fetchAddUser(token, { name, email, password, role });
      setRegisterError('');
      console.log(response);
    } catch (e) {
      console.log(e.message);
      setRegisterError(e.message);
    }
  };

  return (
    <div>
      <label htmlFor="insert-username">
        <input
          id="insert-username"
          type="text"
          data-testid="admin_manage__input-name"
          placeholder="Nome e sobrenome"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />
      </label>
      <label htmlFor="insert-email">
        <input
          id="insert-email"
          type="text"
          data-testid="admin_manage__input-email"
          placeholder="set-email@site.com.br"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="insert-password">
        <input
          id="insert-password"
          type="password"
          data-testid="admin_manage__input-password"
          placeholder="*********"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <select
        data-testid="admin_manage__select-role"
        value={ role }
        onChange={ (e) => setRole(e.target.value) }
      >
        <option value="customer">Customer</option>
        <option value="seller">Seller</option>
        <option value="administrator">Administrator</option>
      </select>
      <button
        type="submit"
        onClick={ handleClick }
        disabled={ enableButton }
        data-testid="admin_manage__button-register"
      >
        CADASTRAR
      </button>
      { registerError ? (
        <p
          data-testid="admin_manage__element-invalid-register"
        >
          Name or Email already in use
        </p>) : '' }
    </div>
  );
}
