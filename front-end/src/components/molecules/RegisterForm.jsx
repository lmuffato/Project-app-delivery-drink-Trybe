import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import testID from '../../datatestids.json';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import ErrorMessage from '../atoms/ErrorMessage';
import validateLogin from '../../utils/validations/joi/login';

const RegisterForm = () => {
  const [register, setRegister] = useState({ fullName: '', email: '', password: '' });
  const { fullName, email, password } = register;
  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleClick = () => {
    history.push('/products');
  };

  const errorMessageContent = () => 'Email/senha inválido! Verifique os dados inseridos';

  return (
    <form>
      <div className="children_container">
        <h3>Cadastro</h3>
        <h5>Crie sua conta!</h5>
        <Input
          className="register-name"
          type="text"
          data-testid={ testID[6] }
          name="fullName"
          value={ fullName }
          onChange={ handleChange }
          placeholder="Nome completo"
        />
        <Input
          className="register-email"
          type="email"
          data-testid={ testID[7] }
          name="email"
          value={ email }
          onChange={ handleChange }
          placeholder="Email"
        />
        <Input
          className="register-password"
          data-testid={ testID[8] }
          name="password"
          value={ password }
          onChange={ handleChange }
          placeholder="Senha"
        />
        <Button
          className="btn-register"
          type="button"
          data-testid={ testID[9] }
          enabled={ !validateLogin.validate({ email, password }).error }
          onClick={ handleClick }
          text="SIGN UP"
        />
        <ErrorMessage
          className="error-message-login"
          data-testid={ testID[10] }
          text={ errorMessageContent() }
          hidden={ isHidden }
        />
      </div>
    </form>
  );
};

export default RegisterForm;
