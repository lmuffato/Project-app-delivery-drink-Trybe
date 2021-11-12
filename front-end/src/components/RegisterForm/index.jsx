import React from 'react';
import InputField from '../InputField';
import Button from '../Button';
import styles from './styles.module.css';

export default function RegisterForm() {
  return (
    <form className={ styles.registerFormContainer }>
      <InputField
        labelName="Nome"
        type="text"
        dataTestId="common_register__input-name"
      />
      <InputField
        labelName="Email"
        type="email"
        dataTestId="common_register__input-email"
      />
      <InputField
        labelName="Senha"
        type="password"
        dataTestId="common_register__input-password"
      />
      <Button
        typeButton="primary"
        title="CADASTRAR"
        dataTestId="common_register__button-register"
      />
    </form>
  );
}
