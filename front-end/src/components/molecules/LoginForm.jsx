import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import testID from '../../datatestids.json';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import ErrorMessage from '../atoms/ErrorMessage';
import { loginAction } from '../../utils/API/fetch';
import validateLogin from '../../utils/validations/joi/login';
import beerLivery from '../../assets/images/logoBeerlivery.png';

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
    const user = await loginAction({ email, password });
    if (!user) {
      setIsHidden(false);
    } else {
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/customer/products');
    }
  };

  const handleClickRegister = () => {
    history.push('/register');
  };

  const errorMessageContent = () => 'Email/senha inválido! Verifique os dados inseridos';

  return (
    <form>
      <div className="children_container_login">
        <img src={ beerLivery } alt="logo" style={ { width: 180 } } />
        <h3>Login</h3>
        <h5>Bem-vindo ao Beerlivery</h5>
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
          className="input-password"
          type="password"
          data-testid={ testID[2] }
          name="password"
          value={ password }
          onChange={ handleChange }
          placeholder="Senha"
        />
        <Button
          className="btn-login"
          type="button"
          data-testid={ testID[3] }
          disabled={ validateLogin.validate({ email, password }).error }
          onClick={ handleClickEnter }
          text="LOGIN"
        />
        <Button
          className="btn-register"
          type="button"
          data-testid={ testID[4] }
          onClick={ handleClickRegister }
          text="Não tenho conta"
        />
        <ErrorMessage
          className="error-message-login"
          data-testid={ testID[5] }
          text={ errorMessageContent() }
          hidden={ isHidden }
        />
      </div>
    </form>
  );
};

export default LoginForm;
