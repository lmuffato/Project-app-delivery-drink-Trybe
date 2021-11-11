import React, { useState } from 'react';
import Button from '../Button';
import InputField from '../InputField/InputField';
import styles from './styles.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetValues = () => {
    setEmail('');
    setPassword('');
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
        onChange={ (event) => setEmail(event.target.value) }
      />
      <InputField
        labelName="Senha"
        type="password"
        name="passwordInput"
        id="passwordInput"
        value={ password }
        onChange={ (event) => setPassword(event.target.value) }
      />
      <Button title="Login" typeButton="primary" type="submit" />
      <Button title="Ainda não tem conta" typeButton="tertiary" />
    </form>
  );
}
