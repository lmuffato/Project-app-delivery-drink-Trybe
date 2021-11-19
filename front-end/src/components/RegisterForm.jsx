import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../contexts/auth';
import useInputs from '../hooks/useInputs';
import registerSchema from '../schemas/register';

import '../styles/components/RegisterForm.scss';

function RegisterForm() {
  const history = useHistory();
  const [
    inputsValues,
    setInputsValues,
  ] = useInputs({ name: '', email: '', password: '' });
  const { Alert, alertIsVisible, authFormSubmit, validateForm } = useContext(AuthContext);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const formValidation = validateForm({ schema: registerSchema, values: inputsValues });
    setButtonDisabled(!formValidation.isValid);
  }, [inputsValues, validateForm]);

  async function register(event) {
    await authFormSubmit(event, {
      formSchema: registerSchema,
      formValues: inputsValues,
      authType: 'register',
    }, () => history.push('/customer/products'));
  }

  return (
    <form onSubmit={ register } className="register-form-container">
      { alertIsVisible && (
        <Alert dataTestId="common_register__element-invalid_register" />
      ) }
      <label htmlFor="name">
        Nome
        <input
          type="text"
          id="name"
          data-testid="common_register__input-name"
          onChange={ setInputsValues }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="text"
          id="email"
          data-testid="common_register__input-email"
          onChange={ setInputsValues }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          id="password"
          data-testid="common_register__input-password"
          onChange={ setInputsValues }
        />
      </label>
      <button
        type="submit"
        data-testid="common_register__button-register"
        disabled={ buttonDisabled }
        className="primary"
      >
        Cadastrar
      </button>
    </form>
  );
}

export default RegisterForm;
