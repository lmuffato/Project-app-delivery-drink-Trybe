import React, { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import InputField from '../InputField';
import ErrorMessage from '../ErrorMessage';
import styles from './styles.module.css';
import postRequest from '../../services/loginAndRegister/postRequest';
import {
  emailVerification,
  passwordVerification,
} from '../../services/loginAndRegister/validations';
import { loginEndpointData } from '../../utils/endPointsData';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [role, setRole] = useState('');

  const navigate = useNavigate();

  const resetValues = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    const storage = localStorage.getItem('user');
    if (storage) {
      setRole(JSON.parse(storage).role);
    }
  }, []);

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
    postRequest(
      { email, password },
      { setShowErrorMessage, setRole },
      loginEndpointData,
    );
    resetValues();
  };

  const conditionalNavigate = useCallback(() => {
    if (role === 'customer') navigate('/customer/products');
    if (role === 'seller') navigate('/seller/orders');
    if (role === 'administrator') navigate('/admin/manage');
  }, [navigate, role]);

  useEffect(() => {
    conditionalNavigate();
  }, [conditionalNavigate]);

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
        disabled={ disableButton }
        dataTestId="common_login__button-login"
      />
      <Link className={ styles.linkButton } to="/register">
        <Button
          title="Ainda não tem conta"
          typeButton="tertiary"
          dataTestId="common_login__button-register"
        />
      </Link>
      {showErrorMessage ? (
        <ErrorMessage
          dataTestId="common_login__element-invalid-email"
          message="Email não cadastrado"
        />
      ) : (
        ''
      )}
    </form>
  );
}
