import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import UserContext from '../context/Users/UsersContext';
import '../styles/login.css';

const validateEmail = (email, password) => {
  const six = 6;
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;
  if (regexEmail.test(String(email).toLowerCase()) && password.length > six) {
    return false;
  } return true;
};

function Login() {
  const { login, setLogin } = useContext(UserContext);
  const { email, password } = login;
  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleClick = () => {
    history.push('/products');
  };

  return (
    <div className="login_container">
      <form>
        <div className="children_container">
          <h3>Login</h3>
          <h5>Welcome to Delivery App</h5>
          <input
            className="input-email"
            type="email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ handleChange }
            placeholder="Email"
          />
          <input
            className="inputEye"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ handleChange }
            placeholder="Password"
          />
          <button
            className="btn-login"
            type="button"
            data-testid="login-submit-btn"
            disabled={ validateEmail(email, password) }
            onClick={ () => handleClick() }
          >
            ENTRAR
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
