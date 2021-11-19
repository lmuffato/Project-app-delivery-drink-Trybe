import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import imgManHoldingBeer from '../images/man-holding-beer.png';
import styles from '../styles/pages/Auth.module.scss';
import loginSchema from '../schemas/login';
import useInputs from '../hooks/useInputs';

export default function Auth() {
  const history = useHistory();
  const [inputsValues, setInputsValues] = useInputs({ email: '', password: '' });
  const { Alert, alertIsVisible, authFormSubmit, validateForm } = useContext(AuthContext);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const formValidation = validateForm({ schema: loginSchema, values: inputsValues });
    setButtonDisabled(!formValidation.isValid);
  }, [inputsValues, validateForm]);

  async function logIn(event) {
    await authFormSubmit(event, {
      formSchema: loginSchema,
      formValues: inputsValues,
      authType: 'login',
    }, () => history.push('/customer/products'));
  }

  return (
    <section className={ styles.auth }>
      { alertIsVisible && <Alert dataTestId="common_login__element-invalid-email" /> }
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
            onChange={ setInputsValues }
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            id="password"
            type="password"
            placeholder="Digite a sua senha"
            onChange={ setInputsValues }
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
