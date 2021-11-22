import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
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
    <form onSubmit={ logIn }>
      { alertIsVisible && <Alert dataTestId="common_login__element-invalid-email" /> }
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
  );
}
