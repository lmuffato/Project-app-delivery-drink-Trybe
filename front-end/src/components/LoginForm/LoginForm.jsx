import React from 'react';
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
    </form>
  );
}
