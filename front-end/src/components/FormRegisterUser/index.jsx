import React, { useEffect, useState, useCallback } from 'react';
// import { useValidator } from 'react-joi';
import genHashMd5 from 'md5';
import useAsync from '../../hooks/useAsync';
// import {
//   initialData, schema, explicitCheck,
// } from '../../utils/validateFormRegisterConfigOptions';
import useManagerUsersContext from '../../hooks/useManagerUsersContext';
import api from '../../services/api';
import ErrorBackend from '../ErrorBackend';

const fetchPostData = (userData) => api.post('/user', userData)
  .then((response) => response.data)
  .catch((error) => error.response.data);

const FormRegisterUser = () => {
  // const [enableButton, setEnableButton] = useState(true);

  const [messageErrorBackend, setMessageErrorBackend] = useState(false);
  const [formValidState, setFormValidState] = useState(false);
  const [formState, setFormState] = useState(
    { name: '', email: '', password: '', role: 'client' },
  );
  const { setUser } = useManagerUsersContext();

  const submitApiData = useCallback(() => {
    const { name, email, password, role } = formState;
    const passwordHash = genHashMd5(password);
    return fetchPostData({ name, email, password: passwordHash, role });
  }, [formState]);

  const { execute, status, value, error } = useAsync(submitApiData, false);

  const handleForm = ({ target }) => {
    setFormState((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validationForm = () => {
    console.log('blur');
    setFormValidState(true);
  };

  // const validateApiResponse = (userData) => userData;
  // try {
  //   await api.post('/user', userData);
  //   setMessageErrorBackend(false);
  // } catch (error) {
  //   const { data } = error.response;
  //   setMessageErrorBackend(data.message);
  //   console.log(data.message);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate();
    setFormValidState(true);
    // const { name, email, password, role } = formState;
    // const passwordHash = genHashMd5(password);
    execute();
  };

  const http200 = 200;
  const http300 = 300;

  useEffect(() => {
    if (status === 'idle' || status === 'pending') {
      return;
    }
    if (status === 'success') {
      if (value.status >= http200 && status < http300) {
        const { name, email, role } = formState;
        setUser({ name, email, role });
        return;
      }
      setMessageErrorBackend(value.message);
      return;
    }
    if (status === 'error') {
      setMessageErrorBackend(error);
    }
  }, [status, setUser, formState, setMessageErrorBackend, error, value]);

  return (
    <>
      <form action="POST">
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            data-testid="admin_manage__input-name"
            onChange={ handleForm }
            onBlur={ validationForm }
            value={ formState.name }
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
            onBlur={ validationForm }
            value={ formState.email }
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
            onBlur={ validationForm }
            value={ formState.password }
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
            onBlur={ validationForm }
            value={ formState.role }
          >
            <option value="salesman">Vendedor</option>
            <option value="client">Cliente</option>
            <option value="administrator">Administrator</option>
          </select>
        </label>

        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ !formValidState || status === 'pending' }
          onClick={ handleSubmit }
        >
          cadastrar
        </button>
      </form>

      <pre>
        { JSON.stringify(formState, null, 2) }
        {`formvalidstate: ${formValidState}`}
        {`status: ${status}`}
      </pre>

      { messageErrorBackend && <ErrorBackend messageError={ messageErrorBackend } />}
    </>
  );
};

export default FormRegisterUser;
