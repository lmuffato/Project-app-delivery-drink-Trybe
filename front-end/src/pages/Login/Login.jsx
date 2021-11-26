import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { loginApi } from '../../API/dataBaseCall';
import { LoginContainer, UserInput } from './loginElements';
import logo from '../../images/Beer-icon.png';

export default function Login() {
  const history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [path, setPath] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  const pathway = {
    customer: '/customer/products',
    administrator: '/admin/manage',
    seller: '/seller/orders',
  };

  const handleChange = ({ target }, handle) => {
    const { value } = target;
    handle(value);
  };
  const tokenStorage = (lgUser) => {
    localStorage.setItem('user', JSON.stringify(lgUser));
  };
  const validInputs = () => {
    const minPasswordLength = 5;
    const emailPattern = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi;
    const validPassword = password.length > minPasswordLength;
    const validEmail = user.match(emailPattern);
    setDisabled(!(validEmail && validPassword));
  };
  useEffect(validInputs, [user, password, disabled]);
  const handleLogin = async () => loginApi(user, password)
    .then((data) => {
      const { role } = data;
      tokenStorage(data);
      setPath(pathway[role]);
      setRedirect(true);
    })
    .catch(setErrorMessage);

  useEffect(() => {
    const ONE_SECOND = 1000;
    const logged = localStorage.getItem('user');
    if (logged) {
      setTimeout(() => history.push('/customer/products'), ONE_SECOND);
    }
  }, []);

  return (
    <div className="gradientAnimated">
      <LoginContainer>
        <img src={ logo } alt="beerMugLogo" />
        <form>
          <UserInput>
            <input
              type="text"
              data-testid="common_login__input-email"
              placeholder="Email"
              name="email"
              value={ user }
              onChange={ (e) => handleChange(e, setUser) }
            />
          </UserInput>
          <UserInput>
            <input
              type="password"
              data-testid="common_login__input-password"
              placeholder="Senha"
              value={ password }
              onChange={ (e) => handleChange(e, setPassword) }
              name="senha"
            />
          </UserInput>
          <button
            type="submit"
            data-testid="common_login__button-login"
            disabled={ disabled }
            onClick={ (event) => {
              event.preventDefault();
              handleLogin();
            } }
          >
            LOGIN
          </button>
          <button
            type="button"
            data-testid="common_login__button-register"
            onClick={ () => history.push('/register') }
          >
            CADASTRE-SE
          </button>
          {redirect && <Redirect to={ path } />}
        </form>
        {errorMessage && (
          <Alert
            data-testid="common_login__element-invalid-email"
            variant="danger"
          >
            {errorMessage}
          </Alert>
        )}
      </LoginContainer>
    </div>
  );
}
