import React, { useEffect, useState, useCallback } from 'react';
import genHashMd5 from 'md5';
import useAsync from '../../../hooks/useAsync';
import validateFormRegister from '../../../utils/validateFormRegister';
import useManagerUsersContext from '../../../hooks/useManagerUsersContext';
import api from '../../../services/api';
import ErrorBackend from '../../../components/ErrorBackend';
import InputText from '../../../components/InputText';
import Label from '../../../components/Label';
import Select from '../../../components/Select';
import ButtonPrimary from '../../../components/ButtonPrimary';

const fetchPostData = (userData) => api.post('/user', userData)
  .then((response) => response.data)
  .catch((error) => error.response.data);

const FormRegisterUser = () => {
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

  useEffect(() => {
    if (!validateFormRegister(formState).error) return setFormValidState(true);
    setFormValidState(false);
  }, [formState, setFormValidState]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      setMessageErrorBackend(error.message);
    }
  }, [status, setUser, formState, setMessageErrorBackend, error, value]);

  return (
    <>
      <form onSubmit={ handleSubmit } action="POST">
        <Label id="name" name="Nome" />
        <InputText
          id="name"
          name="name"
          onChange={ handleForm }
          value={ formState.name }
          placeholder="Mínimo 12 caracteres"
          data-testid="admin_manage__input-name"
        />

        <Label id="email" name="Email" />
        <InputText
          id="email"
          name="email"
          onChange={ handleForm }
          value={ formState.email }
          placeholder="example@email.com"
          data-testid="admin_manage__input-email"
        />

        <Label id="password" name="Senha" />
        <InputText
          id="password"
          name="password"
          onChange={ handleForm }
          value={ formState.password }
          placeholder="Mínimo 6 caracteres"
          data-testid="admin_manage__input-password"
        />

        <Label id="role" name="Tipo" />

        <Select
          id="role"
          name="role"
          onChange={ handleForm }
          value={ formState.role }
          data-testid="admin_manage__select-role"
          options={ [
            { name: 'Vendedor', value: 'salesman' },
            { name: 'Cliente', value: 'client' },
            { name: 'Administrator', value: 'administrator' },
          ] }
        />

        <ButtonPrimary
          type
          name="CADASTRAR"
          data-testid="admin_manage__button-register"
          disabled={ !formValidState || status === 'pending' }
        />
      </form>

      { messageErrorBackend && <ErrorBackend messageError={ messageErrorBackend } />}
    </>
  );
};

export default FormRegisterUser;
