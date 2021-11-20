import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../api';
import { useAuth } from '../../contexts/auth';

const validateEmail = (email) => /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(email);
const MAX_PWD_LENGTH = 6;

const Form = styled.form`
  background: ${({ theme }) => theme['light-dark']};
  box-shadow: 0 0 5px 0 ${({ theme }) => theme.shadow};
  max-width: 350px;
  padding: 20px;
  & > * { margin-top: 40px; }
  & > *:first-child { margin-top: 0px; }
`;

function Login() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, redirectUserByRole } = useAuth();

  const authUser = (ev) => {
    ev.preventDefault();
    api.login(email, password)
      .then((data) => {
        login(data);
        redirectUserByRole(data);
      })
      .catch(setErrorMessage);
  };

  const canSubmit = validateEmail(email) && password.length >= MAX_PWD_LENGTH;

  return (
    <>
      <Form onSubmit={ authUser }>
        <Input
          type="email "
          label="Login"
          name="email"
          onChange={ ({ target: { value } }) => setEmail(value) }
          placeholder="email@trybeer.com.br"
          datatestid="common_login__input-email"
        />
        <Input
          type="password"
          onChange={ ({ target: { value } }) => setPassword(value) }
          label="Senha"
          name="email"
          datatestid="common_login__input-password"
          placeholder={ `${'****'}${'****'}${'***'}` }
        />

        <Button
          full
          type="submit"
          variant="primary"
          datatestid="common_login__button-login"
          disabled={ !canSubmit }
        >
          LOGIN
        </Button>
        <Button
          full
          variant="tertiary"
          datatestid="common_login__button-register"
          onClick={ authUser }
        >
          Ainda não tenho conta
        </Button>
      </Form>

      {errorMessage
      && (
        <p data-testid="common_login__element-invalid-email">
          {errorMessage.message}
        </p>
      )}
    </>
  );
}

export default Login;
