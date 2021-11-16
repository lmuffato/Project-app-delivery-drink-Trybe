import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../atoms/Button';
import ErrorMessage from '../atoms/ErrorMessage';
import Input from '../atoms/Input';
import loginAction from '../../utils/validations/API/fetch';
import validateLogin from '../../utils/validations/joi/login';

const LoginForm = () => {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [isHidden, setIsHidden] = useState(true);
  const { email, password } = login;
  const history = useHistory();
  const handleChange = ({ target: { name, value } }) => {
    setIsHidden(true);
    setLogin({
      ...login,
      [name]: value,
    });
  };
  const handleClickEnter = async () => {
    const token = await loginAction({ email, password });
    console.log(token);
    if (!token) {
      setIsHidden(false);
    } else {
      history.push('/customer/products');
    }
  };
  const handleClickRegister = () => {
    history.push('/register');
  };
  const errorMessageContent = () => 'Element oculto (Mensagens de erro)';
  return (
    <form>
      <div className="children_container">
        <h3>Login</h3>
        <h5>Welcome to Delivery App</h5>
        <Input
          className="input-email"
          type="email"
          data-testid="common_login__input-email"
          name="email"
          value={ email }
          onChange={ handleChange }
          placeholder="Email"
        />
        <Input
          className="input-password"
          data-testid="common_login__input-password"
          name="password"
          value={ password }
          onChange={ handleChange }
          placeholder="Password"
        />
        <Button
          className="btn-login"
          type="button"
          data-testid="common_login__button-login"
          enabled={ !validateLogin.validate({ email, password }).error }
          onClick={ handleClickEnter }
          text="ENTRAR"
        />
        <Button
          className="btn-register"
          type="button"
          data-testid="common_login__button-register"
          onClick={ handleClickRegister }
          text="Ainda não tenho conta"
        />
        <ErrorMessage
          className="error-message-login"
          data-testid="common_login__element-invalid-email"
          text={ errorMessageContent }
          hidden={ isHidden }
        />
      </div>
    </form>
  );
};

export default LoginForm;
