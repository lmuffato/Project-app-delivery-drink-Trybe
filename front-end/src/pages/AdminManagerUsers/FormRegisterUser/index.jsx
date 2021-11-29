import React, { useEffect, useState, useCallback } from 'react';
import genHashMd5 from 'md5';
import useAsync from '../../../hooks/useAsync';
import validateFormRegister from '../../../utils/validateFormRegister';
import useManagerUsersContext from '../../../hooks/useManagerUsersContext';
import api from '../../../services/api';
import ErrorBackend from '../../../components/ErrorBackend';
import InputText from '../../../components/InputText';
import Select from '../../../components/Select';
import ButtonPrimary from '../../../components/ButtonPrimary';
import './styles.css';

const fetchPostData = (userData) => api.post('/user', userData)
  .then((response) => response.data)
  .catch((error) => error.response.data);

const FormRegisterUser = () => {
  const STATE_FORM_DEFAULT = { name: '', email: '', password: '', role: 'customer' };
  const [messageErrorBackend, setMessageErrorBackend] = useState(false);
  const [formValidState, setFormValidState] = useState(false);
  const [formState, setFormState] = useState(STATE_FORM_DEFAULT);
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
    <div>
      <form
        onSubmit={ handleSubmit }
        action="POST"
        className="c_form_registerUser"
      >

        <InputText
          type="text"
          id="name"
          label="nome"
          name="name"
          onChange={ handleForm }
          value={ formState.name }
          placeholder="Nome e sobrenome"
          data-testid="admin_manage__input-name"
          autoFocus="autoFocus"
        />

        <InputText
          type="text"
          id="email"
          label="Email"
          name="email"
          onChange={ handleForm }
          value={ formState.email }
          placeholder="seu-email@site.com.br"
          data-testid="admin_manage__input-email"
        />

        <InputText
          label="Senha"
          type="password"
          id="password"
          name="password"
          onChange={ handleForm }
          value={ formState.password }
          placeholder="*********"
          data-testid="admin_manage__input-password"
        />

        <Select
          id="role"
          name="role"
          label="Tipo"
          onChange={ handleForm }
          value={ formState.role }
          data-testid="admin_manage__select-role"
          options={ [
            { name: 'Vendedor', value: 'seller' },
            { name: 'Cliente', value: 'customer' },
            { name: 'Administrator', value: 'administrator' },
          ] }
        />

        <ButtonPrimary
          type
          name="CADASTRAR"
          dataTestId="admin_manage__button-register"
          disabled={ !formValidState || status === 'pending' }
        />
      </form>

      { messageErrorBackend && <ErrorBackend messageError={ messageErrorBackend } />}
    </div>
  );
};

export default FormRegisterUser;
