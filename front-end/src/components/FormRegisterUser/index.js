import React, { useState } from 'react';

const FormRegisterUser = () => {
  const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    role: 'client',
  };

  const [dataUser, setDataUser] = useState(INITIAL_STATE);

  const handleForm = ({ target: { value, name } }) => {
    setDataUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          data-testid="admin_manage__input-name"
          onChange={ handleForm }
          value={ dataUser.name }
        />
      </label>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          id="email"
          data-testid="admin_manage__input-email"
          onChange={ handleForm }
          value={ dataUser.email }
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          id="password"
          data-testid="admin_manage__input-password"
          onChange={ handleForm }
          value={ dataUser.password }
        />
      </label>

      <select
        data-testid="admin_manage__select-role"
        onChange={ handleForm }
        name="role"
        value={ dataUser.role }
      >
        <option value="salesman">Vendedor</option>
        <option value="client">Cliente</option>
        <option value="administrator">Administrator</option>
      </select>

      <button
        type="submit"
        data-testid="admin_manage__button-register"
      >
        cadastrar
      </button>
    </form>
  );
};

export default FormRegisterUser;
