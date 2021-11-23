import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { setLogin } from '../services/apis';

function Login() {
  const PASSWORD_LENGTH = 6;

  const history = useHistory();
  const { setLoggedUser } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const loginButton = async () => {
    try {
      const loginUser = await setLogin(email, password);
      setLoggedUser(loginUser);
      localStorage.setItem('user', JSON.stringify(loginUser));
      setErrorMessage(false);
      history.push('/customer/products');
    } catch (error) {
      setErrorMessage(true);
    }
  };

  useEffect(() => {
    const validateEmail = /^[\S]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/g.test(email);
    if (validateEmail && password.length >= PASSWORD_LENGTH) {
      setDisabled(false);
    } else { setDisabled(true); }
  }, [email, password]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) history.push('/customer/products');
  }, []);

  return (
    <div>
      Login
      <input
        value={ email }
        name="email"
        type="email"
        data-testid="common_login__input-email"
        onChange={ (e) => handleChange(e) }
      />
      Senha
      <input
        value={ password }
        name="password"
        type="password"
        data-testid="common_login__input-password"
        onChange={ handleChange }
      />
      <button
        data-testid="common_login__button-login"
        type="button"
        disabled={ disabled }
        onClick={ loginButton }
      >
        LOGIN
      </button>
      <Link to="/register">
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </Link>
      <p data-testid="common_login__element-invalid-email">
        { errorMessage ? 'Usuário não encontrado' : null }
      </p>
    </div>
  );
}

export default Login;
