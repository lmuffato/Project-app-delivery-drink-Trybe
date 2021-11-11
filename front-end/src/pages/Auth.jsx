import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import imgManHoldingBeer from '../images/man-holding-beer.png';
import useInputs from '../hooks/useInputs';
import useAlert from '../hooks/useAlert';
import loginSchema from '../schemas/login';
import api from '../services/api';
import styles from '../styles/pages/Auth.module.scss';

export default function Auth() {
  const [values, setInputs] = useInputs({ email: '', password: '' });
  const [schemaStatus, setSchemaStatus] = useState({ valid: false, error: '' });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { Alert, alertMessage, alertType, isVisible, showAlert } = useAlert();
  const history = useHistory();

  useEffect(() => {
    showAlert(false);
    const { error } = loginSchema.validate(values);
    setButtonDisabled(error !== undefined);
    setSchemaStatus({ valid: error === undefined, error: error ? error.message : '' });
  }, [values, showAlert]);

  async function logIn(event) {
    event.preventDefault();
    try {
      if (!schemaStatus.valid) throw new Error(schemaStatus.error);
      await api.post('/login', values);
      history.push('/customer/products');
    } catch (error) {
      alertType('danger');
      alertMessage(error.message);
      showAlert(true);
    }
  }

  return (
    <section className={ styles.auth }>
      { isVisible && <Alert dataTestId="common_login__element-invalid-email" /> }
      <span className={ styles.manHoldingBeer }>
        <img
          src={ imgManHoldingBeer }
          alt="Homem sorrindo e segurando caneca de cerveja"
        />
      </span>
      <img src="./logo-compact.svg" alt="tchau problema" />
      <form onSubmit={ logIn }>
        <label htmlFor="email">
          E-mail:
          <input
            id="email"
            type="email"
            placeholder="Digite o seu e-mail"
            onChange={ setInputs }
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            id="password"
            type="password"
            placeholder="Digite a sua senha"
            onChange={ setInputs }
            data-testid="common_login__input-password"
          />
        </label>
        <button
          type="submit"
          data-testid="common_login__button-login"
          className="primary"
          disabled={ buttonDisabled }
        >
          Entrar
        </button>
        <button
          onClick={ () => history.push('/register') }
          type="button"
          data-testid="common_login__button-register"
          className="link"
        >
          Ainda não tenho conta
        </button>
      </form>
    </section>
  );
}
