/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, TextField, Button, Link } from '@mui/material';
import ContextLogin from '../context/ContextLogin';

function Login() {
  const { makeLogin, invalidEmailError } = useContext(ContextLogin);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(true);

  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const MINPASSWORDLENGTH = 6;

  const handleLogin = async () => {
    await makeLogin(email, password);
    if (!invalidEmailError) {
      history.push('/');
    }
  };

  const handleFormChange = (e) => {
    const { target: { name, value } } = e;
    if (name === 'email') {
      setEmail(value);
    }
    setPassword(value);
    const isError = !((emailRegex.test(email))
    && (password.length >= MINPASSWORDLENGTH - 1));
    setFormError(isError);
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
        type="text"
        name="email"
        required
        value={ email }
        onChange={ handleFormChange }
        error={ !(emailRegex.test(email)) }
        helperText={ !(emailRegex.test(email)) ? 'Digite um email válido' : '' }
        inputprops={ {
          'data-testid': 'common_login__input-email',
        } }
      />
      <TextField
        margin="dense"
        label="Senha"
        type="password"
        name="password"
        required
        value={ password }
        onChange={ handleFormChange }
        error={ password.length < MINPASSWORDLENGTH }
        helperText={ password.length >= MINPASSWORDLENGTH
          ? '' : 'A senha tem que ter mais que 6 caracteres' }
        inputprops={ {
          'data-testid': 'common_login__input-password',
        } }
      />
      <Button
        disabled={ formError }
        onClick={ handleLogin }
        inputprops={ {
          'data-testid': 'common_login__button-login',
        } }
      >
        Login
      </Button>
      <Link
        href="/register"
        underline="hover"
        inputprops={ {
          'data-testid': 'common_login__button-register',
        } }
      >
        Criar conta
      </Link>
      {invalidEmailError && (
        <span
          data-testid="common_login__element-invalid-email"
        >
          Email ou senha inválida
        </span>
      )}
    </Box>

  // <div className="loginScreen">
  //   <h1
  //     className="login-title"
  //   >
  //     Login
  //   </h1>
  //   <form
  //     className="form"
  //     onSubmit={ (e) => {
  //       e.preventDefault();
  //       askLogin();
  //     } }
  //   >
  //     <input
  //       className="input-login"
  //       type="email"
  //       value={ email }
  //       onChange={ (e) => setEmail(e.target.value) }
  //       placeholder="Digite seu e-mail"
  //       required
  //     />
  //     <input
  //       className="input-login"
  //       type="password"
  //       value={ password }
  //       onChange={ (e) => setPassword(e.target.value) }
  //       placeholder="Digite sua senha"
  //       minLength="7"
  //       required
  //     />
  //     <button
  //       className="loginBtn"
  //       type="submit"
  //     >
  //       Entrar
  //     </button>
  //   </form>
  //   { !allowed && <span>Informações do email ou senha estão erradas</span> }
  //   <a href="/register">Cadastre um novo usuário</a>
  // </div>
  );
}

export default Login;
