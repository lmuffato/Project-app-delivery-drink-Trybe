import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../api';
import { useAuth } from '../../contexts/auth';

const validateEmail = (email) => /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(email);
const MIN_PWD_LENGTH = 6;
const MIN_NAME_LENGTH = 12;

const Form = styled.form`
  background: ${({ theme }) => theme['light-dark']};
  box-shadow: 0 0 5px 0 ${({ theme }) => theme.shadow};
  max-width: 350px;
  padding: 20px;
  & > * { margin-top: 40px; }
  & > *:first-child { margin-top: 0px; }
`;

function Register() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, redirectUserByRole } = useAuth();

  const registerUser = (ev) => {
    ev.preventDefault();
    api.registerUser(name, email, password)
      .then((data) => {
        login(data);
        redirectUserByRole(data);
      })
      .catch(setErrorMessage);
  };

  const canSubmit = (
    validateEmail(email)
    && password.length >= MIN_PWD_LENGTH
    && name.length >= MIN_NAME_LENGTH
  );

  return (
    <Form onSubmit={ registerUser }>
      <Input
        type="text"
        label="Nome"
        name="name"
        value={ name }
        onChange={ ({ target: { value } }) => setName(value) }
        placeholder="Seu nome"
        datatestid="common_register__input-name"
      />
      <Input
        type="email"
        label="Email"
        name="email"
        value={ email }
        onChange={ ({ target: { value } }) => setEmail(value) }
        placeholder="seu-email@site.com.br"
        datatestid="common_register__input-email"
      />
      <Input
        type="password"
        onChange={ ({ target: { value } }) => setPassword(value) }
        label="Senha"
        value={ password }
        name="password"
        datatestid="common_register__input-password"
        placeholder={ `${'****'}${'****'}${'***'}` }
      />

      <Button
        full
        type="submit"
        variant="primary"
        datatestid="common_register__button-register"
        disabled={ !canSubmit }
      >
        CADASTRAR
      </Button>
      {errorMessage
      && (
        <p data-testid="common_register__element-invalid_register">
          {errorMessage.message}
        </p>
      )}
    </Form>
  );
}

export default Register;
