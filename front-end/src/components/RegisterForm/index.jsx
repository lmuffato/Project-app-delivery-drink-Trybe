import React, { useState } from 'react';
import InputField from '../InputField';
import Button from '../Button';
import styles from './styles.module.css';
import ErrorMessage from '../ErrorMessage';
import registerRequest from '../../services/loginAndRegister/registerRequest';
import {
  emailVerification,
  nameVerification,
  passwordVerification,
} from '../../services/loginAndRegister/validations';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const resetValues = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = (event, setStateCallback) => {
    const verifications = emailVerification(email)
    && passwordVerification(password)
    && nameVerification(name);

    if (verifications) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
    setStateCallback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerRequest(name, email, password, setShowErrorMessage);
    resetValues();
  };

  return (
    <form className={ styles.registerFormContainer } onSubmit={ handleSubmit }>
      <InputField
        labelName="Nome"
        type="text"
        name="inputName"
        id="inputName"
        value={ name }
        onChange={ (event) => handleChange(event, setName) }
        dataTestId="common_register__input-name"
      />
      <InputField
        labelName="Email"
        type="email"
        name="inputEmail"
        id="inputEmail"
        value={ email }
        onChange={ (event) => handleChange(event, setEmail) }
        dataTestId="common_register__input-email"
      />
      <InputField
        labelName="Senha"
        type="password"
        name="inputPassword"
        id="inputPassword"
        value={ password }
        onChange={ (event) => handleChange(event, setPassword) }
        dataTestId="common_register__input-password"
      />
      <Button
        title="CADASTRAR"
        typeButton="primary"
        type="submit"
        disabled={ disableButton }
        dataTestId="common_register__button-register"
      />
      {showErrorMessage ? <ErrorMessage message="Dados inválidos" /> : ''}
    </form>
  );
}
