import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import validateEmail from '../../utils/validations/validateEmail';
import validatePassword from '../../utils/validations/validatePassword';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const LoginForm = () => {
  const [login, setLogin] = useState({ email: '', password: '' });
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
    <form>
      <div className="children_container">
        <h3>Login</h3>
        <h5>Welcome to Delivery App</h5>
        <Input
          className="input-email"
          type="email"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ handleChange }
          placeholder="Email"
        />
        <Input
          className="input-password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ handleChange }
          placeholder="Password"
        />
        <Button
          className="btn-login"
          type="button"
          data-testid="login-submit-btn"
          disabled={ !(validateEmail(email) && validatePassword(password)) }
          onClick={ handleClick }
          text="ENTRAR"
        />
      </div>
    </form>
  );
};

export default LoginForm;
