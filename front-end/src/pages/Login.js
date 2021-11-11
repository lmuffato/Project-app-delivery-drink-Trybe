import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  const history = useHistory();
  const onClick = () => history.push('/register');

  return (
    <fieldset>
      <Input
        datatestid="common_login__input-email"
        label="Login"
      />
      <Input
        datatestid="common_login__input-password"
        label="Senha"
      />
      <Button
        datatestid="common_login__button-login"
        label="LOGIN"
      />
      <Button
        datatestid="common_login__button-register"
        label="Ainda não tenho conta"
        onClick={ onClick }
      />
    </fieldset>
  );
};

export default Login;
