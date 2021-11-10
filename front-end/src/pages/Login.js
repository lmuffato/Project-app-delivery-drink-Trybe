import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  const prefix = 'common_login__';

  const history = useHistory();
  const onClick = () => history.push('/register');

  return (
    <fieldset>
      <Input
        datatestid={ `${prefix}input-email` }
        label="Login"
      />
      <Input
        datatestid={ `${prefix}input-password` }
        label="Senha"
      />
      <Button
        datatestid={ `${prefix}button-login` }
        label="LOGIN"
      />
      <Button
        datatestid={ `${prefix}button-register` }
        label="Ainda não tenho conta"
        onClick={ onClick }
      />
    </fieldset>
  );
};

export default Login;
