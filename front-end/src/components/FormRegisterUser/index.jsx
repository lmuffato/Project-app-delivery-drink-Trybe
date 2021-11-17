import React, { useEffect, useState } from 'react';
import { useValidator } from 'react-joi';
import genHashMd5 from 'md5';
import {
  initialData, schema, explicitCheck,
} from '../../utils/validateFormRegisterConfigOptions';
import useManagerUsersContext from '../../hooks/useManagerUsersContext';
import api from '../../services/api';
import ErrorBackend from '../ErrorBackend';

const FormRegisterUser = () => {
  const [enableButton, setEnableButton] = useState(true);
  const [messageErrorBackend, setMessageErrorBackend] = useState(false);
  const { setUser } = useManagerUsersContext();

  const {
    state, setData,
    setExplicitField,
    validate,
  } = useValidator({ initialData, schema, explicitCheck });

  const handleForm = ({ target: { value, name } }) => {
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fetchPostData = async (userData) => {
    try {
      await api.post('/user', userData);
      setMessageErrorBackend(false);
    } catch (error) {
      const { data } = error.response;
      setMessageErrorBackend(data.message);
      console.log(data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    const { name, email, password, role } = state.$data;
    const passwordHash = genHashMd5(password);

    setUser({ name, email, password, role });

    fetchPostData({ name, email, password: passwordHash, role });
  };

  useEffect(() => {
    const enableOrDisable = state.$auto_invalid;
    setEnableButton(enableOrDisable);
  }, [state.$auto_invalid]);

  return (
    <>
      <form action="POST" onSubmit={ handleSubmit }>
        <label htmlFor="name">
          <span>Nome</span>
          <input
            type="text"
            name="name"
            id="name"
            data-testid="admin_manage__input-name"
            onChange={ handleForm }
            onBlur={ () => setExplicitField('name', true) }
            value={ state.$data.name }
            placeholder="Mínimo 12 caracteres"
          />
        </label>

        <label htmlFor="email">
          <span>Email</span>
          <input
            type="text"
            name="email"
            id="email"
            data-testid="admin_manage__input-email"
            onChange={ handleForm }
            onBlur={ () => setExplicitField('email', true) }
            value={ state.$data.email }
            placeholder="example@email.com"
          />
        </label>

        <label htmlFor="password">
          <span>Senha</span>
          <input
            type="password"
            name="password"
            id="password"
            data-testid="admin_manage__input-password"
            onChange={ handleForm }
            onBlur={ () => setExplicitField('password', true) }
            value={ state.$data.password }
            placeholder="Mínimo 6 caracteres"
          />
        </label>

        <label htmlFor="role">
          <span>Tipo</span>
          <select
            id="role"
            data-testid="admin_manage__select-role"
            onChange={ handleForm }
            name="role"
            onBlur={ () => setExplicitField('role', true) }
            value={ state.$data.role }
          >
            <option value="salesman">Vendedor</option>
            <option value="client">Cliente</option>
            <option value="administrator">Administrator</option>
          </select>
        </label>

        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ enableButton }
        >
          cadastrar
        </button>
      </form>

      <span>
        {state.$errors.name.map((data) => data.$message).join(',')}
        {state.$errors.email.map((data) => data.$message).join(',')}
        {state.$errors.password.map((data) => data.$message).join(',')}
        {state.$errors.role.map((data) => data.$message).join(',')}
      </span>

      { messageErrorBackend && <ErrorBackend messageError={ messageErrorBackend } />}
    </>
  );
};

export default FormRegisterUser;
