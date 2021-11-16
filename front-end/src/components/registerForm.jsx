import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useInputs from '../hooks/useInputs';
import registerValidations from '../schemas/register';
import useAlert from '../hooks/useAlert';

import '../styles/components/RegisterForm.scss';

function RegisterForm() {
  const [values, setValues] = useInputs({ email: '', name: '', password: '' });
  const [schemaStatus, setSchemaStatus] = useState({ valid: false, error: '' });
  const [buttonState, setButtonState] = useState(true);

  const { Alert, alertMessage, alertType, isVisible, showAlert } = useAlert();

  const history = useHistory();

  useEffect(() => {
    showAlert(false);
    const { error } = registerValidations.validate(values);
    setButtonState(error !== undefined);
    setSchemaStatus({ valid: error === undefined, error: error ? error.message : '' });
  }, [values, showAlert]);

  const sendRegister = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password } = values;
      const response = await axios.post('http://localhost:3001/register', {
        name,
        email,
        password,
        role: 'customer',
      });
      console.log(response);
      if (!schemaStatus.valid) throw new Error(schemaStatus.message);
      history.push('/customer/products');
    } catch (error) {
      console.error(error);
      alertType('danger');
      alertMessage(error.message);
      showAlert(true);
    }
  };

  return (
    <div className="register-form-container">
      { isVisible && <Alert dataTestId="common_register__element-invalid_register" />}
      <form onSubmit={ sendRegister } style={ { zIndex: 10 } }>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            data-testid="common_register__input-name"
            onChange={ async (e) => {
              await setValues(e);
            } }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            data-testid="common_register__input-email"
            onChange={ async (e) => {
              await setValues(e);
            } }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            data-testid="common_register__input-password"
            onChange={ async (e) => {
              await setValues(e);
            } }
          />
        </label>
        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ buttonState }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
