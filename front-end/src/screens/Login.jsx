import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, TextField, Button, Link } from '@mui/material';
import ContextLogin from '../context/ContextLogin';

function Login() {
  const { makeLogin, invalidEmailError } = useContext(ContextLogin);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const MINPASSWORDLENGTH = 6;

  const validateEmail = () => emailRegex.test(email);

  const validatePassword = () => password.length >= MINPASSWORDLENGTH;

  const validateLoginInputs = () => validateEmail() && validatePassword();

  const handleLogin = async () => {
    const response = await makeLogin(email, password);
    if (response) {
      history.push('/customer/products');
    }
  };

  return (
    <Box
      component="form"
      sx={ {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      } }
    >
      <TextField
        margin="dense"
        label="Email"
        type="email"
        name="email"
        required
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
        error={ !validateEmail() }
        helperText={ !(validateEmail()) && 'Digite um email válido' }
        inputProps={ { 'data-testid': 'common_login__input-email' } }
      />
      <TextField
        margin="dense"
        label="Senha"
        type="password"
        name="password"
        required
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
        error={ !validatePassword() }
        helperText={ !validatePassword()
          && 'A senha tem que ter mais que 6 caracteres' }
        inputProps={ { 'data-testid': 'common_login__input-password' } }
      />
      <Button
        disabled={ !validateLoginInputs() }
        onClick={ handleLogin }
        data-testid="common_login__button-login"
      >
        Login
      </Button>
      <Button
        data-testid="common_login__button-register"
      >
        <Link
          href="/register"
          underline="hover"
        >
          Criar conta
        </Link>
      </Button>

      {invalidEmailError && (
        <span
          data-testid="common_login__element-invalid-email"
        >
          Email ou senha inválida
        </span>
      )}
    </Box>
  );
}

export default Login;
