import React from 'react';
import Button from '../Button';
import InputField from '../InputField/InputField';

export default function LoginForm() {
  return (
    <form>
      <InputField
        labelName="Login"
        type="email"
        name="loginInput"
        id="loginInput"
      />
      <InputField
        labelName="Senha"
        type="password"
        name="passwordInput"
        id="passwordInput"
      />
      <Button title="Login" typeButton="primary" />
      <Button title="Ainda não tem conta" typeButton="tertiary" />
    </form>
  );
}
