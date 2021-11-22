import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import InputField from '../InputField';
import Button from '../Button';
import styles from './styles.module.css';
import ErrorMessage from '../ErrorMessage';
import { registerEndpointData } from '../../utils/endPointsData';
import postRequest from '../../services/loginAndRegister/postRequest';

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
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) navigate('/customer/products');
  }, [redirect]);

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
    postRequest(
      { name, email, password },
      { setShowErrorMessage, setRedirect },
      registerEndpointData,
    );
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
      {showErrorMessage ? (
        <ErrorMessage
          dataTestId="common_register__element-invalid_register"
          message="Email já cadastrado"
        />
      ) : (
        ''
      )}
    </form>
  );
}
