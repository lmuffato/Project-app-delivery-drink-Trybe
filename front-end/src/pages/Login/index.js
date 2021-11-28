import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../api';
import { useAuth } from '../../contexts/auth';
import Alert from '../../components/Alert';

const validateEmail = (email) => /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(email);
const MIN_PWD_LENGTH = 6;

const Form = styled.form`
  background: ${({ theme }) => theme['light-dark']};
  box-shadow: 0 0 5px 0 ${({ theme }) => theme.shadow};
  max-width: 350px;
  padding: 20px;
  & > * { margin-top: 40px; }
  & > *:first-child { margin-top: 0px; }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, redirectUserByRole } = useAuth();
  const navigator = useNavigate();

  const authUser = (ev) => {
    ev.preventDefault();
    api.login(email, password)
      .then((data) => {
        login(data);
        redirectUserByRole(data);
      })
      .catch(({ message }) => toast.error(
        ({ style }) => (
          <Alert
            message={ message }
            style={ style }
            testid="common_login__element-invalid-email"
          />
        ),
      ));
  };

  const canSubmit = validateEmail(email) && password.length >= MIN_PWD_LENGTH;

  return (
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
        name="password"
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
        onClick={ () => navigator('/register') }
      >
        Ainda não tenho conta
      </Button>
    </Form>
  );
}

export default Login;
