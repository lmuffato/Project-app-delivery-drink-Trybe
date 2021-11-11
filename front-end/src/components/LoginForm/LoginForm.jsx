import React, { useState } from 'react';
import Button from '../Button';
import InputField from '../InputField/InputField';
import styles from './styles.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  return (
    <form className={ styles.loginFormContainer }>
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
        onChange={ (event) => setpassword(event.target.value) }
      />
      <Button title="Login" typeButton="primary" />
      <Button title="Ainda não tem conta" typeButton="tertiary" />
    </form>
  );
}
