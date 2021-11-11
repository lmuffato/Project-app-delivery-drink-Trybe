import React, { useState } from 'react';
import Button from '../Button';
import InputField from '../InputField';
import ErrorMessage from '../ErrorMessage';
import styles from './styles.module.css';
import loginRequest from '../../services/login/loginRequest';
import {
  emailVerification,
  passwordVerification,
} from '../../services/login/loginValidations';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const resetValues = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = (event, setStateCallback) => {
    const verifications = emailVerification(email) && passwordVerification(password);
    if (verifications) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
    setStateCallback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginRequest(email, password, setShowErrorMessage);
    resetValues();
  };

  return (
    <form className={ styles.loginFormContainer } onSubmit={ handleSubmit }>
      <InputField
        labelName="Login"
        type="email"
        name="loginInput"
        id="loginInput"
        value={ email }
        onChange={ (event) => handleChange(event, setEmail) }
        dataTestId="common_login__input-email"
      />
      <InputField
        labelName="Senha"
        type="password"
        name="passwordInput"
        id="passwordInput"
        value={ password }
        onChange={ (event) => handleChange(event, setPassword) }
        dataTestId="common_login__input-password"
      />
      <Button
        title="Login"
        typeButton="primary"
        type="submit"
        dataTestId="common_login__button-login"
        disabled={ disableButton }
      />
      <Button
        title="Ainda não tem conta"
        typeButton="tertiary"
        dataTestId="common_login__button-register"
      />
      {showErrorMessage ? <ErrorMessage message="Email não cadastrado" /> : ''}
    </form>
  );
}
