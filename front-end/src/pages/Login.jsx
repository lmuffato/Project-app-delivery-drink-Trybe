import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import { FormControl, InputGroup } from 'react-bootstrap';
import { loginApi } from '../API/dataBaseCall';

export default function Login() {
  const history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = ({ target }, handle) => {
    const { value } = target;
    handle(value);
  };
  const tokenStorage = ({ token }) => {
    localStorage.setItem('token', token);
  };
  const handleLogin = async () => loginApi(user, password).then((data) => {
    tokenStorage(data);
    setRedirect(true);
  }).catch(setErrorMessage);

  return (
    <Container>
      <h1>Login</h1>
      <form>
        <InputGroup>
          <FormControl
            type="text"
            data-testid="common_login__input-email"
            placeholder="Email"
            name="email"
            value={ user }
            onChange={ (e) => handleChange(e, setUser) }
          />
        </InputGroup>
        <FormControl
          type="password"
          data-testid="common_login__input-password"
          placeholder="Senha"
          value={ password }
          onChange={ (e) => handleChange(e, setPassword) }
          name="senha"
        />
        <Button
          type="submit"
          data-testid="common_login__button-login"
          onClick={ (event) => {
            event.preventDefault();
            handleLogin();
          } }
        >
          LOGIN
        </Button>
        <Button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          CADASTRE-SE
        </Button>
        {redirect && <Redirect to="/customer/products" />}
      </form>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    </Container>
  );
}
