import React, { useState } from 'react';
import Button from '../Button';
import InputField from '../InputField/InputField';
import styles from './styles.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const emailVerification = () => {
    const regex = /\S+@\S+\.\S+/;
    const result = regex.test(email);
    return result;
  };

  const passwordVerification = () => {
    const minimumPasswordLength = 5;
    return password.length >= minimumPasswordLength;
  };

  const resetValues = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = (event, setStates) => {
    const verifications = emailVerification() && passwordVerification();
    console.log(verifications);
    if (verifications) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
    setStates(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`email: ${email} senha: ${password}`);
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
    </form>
  );
}
