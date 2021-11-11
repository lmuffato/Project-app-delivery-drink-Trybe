import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import testID from '../../../datatestids.json';
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

  const handleLogin = () => {
    history.push('/products');
  };

  const handleRegister = () => {
    history.push('/register');
  };

  return (
    <form>
      <div className="children_container">
        <h3>Login</h3>
        <h5>Welcome to Delivery App</h5>
        <Input
          className="input-email"
          type="email"
          data-testid={ testID[1] }
          name="email"
          value={ email }
          onChange={ handleChange }
          placeholder="Email"
        />
        <Input
          className="inputEye"
          data-testid={ testID[2] }
          name="password"
          value={ password }
          onChange={ handleChange }
          placeholder="Password"
        />
        <Button
          className="btn-login"
          type="button"
          data-testid={ testID[3] }
          disabled={ !(validateEmail(email) && validatePassword(password)) }
          onClick={ handleLogin }
          text="LOGIN"
        />
        <Button
          className="btn-register"
          type="button"
          data-testid={ testID[4] }
          onClick={ handleRegister }
          text="Don't have an account yet?"
        />
      </div>
    </form>
  );
};

export default LoginForm;
