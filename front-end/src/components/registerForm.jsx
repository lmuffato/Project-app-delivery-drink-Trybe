import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useInputs from '../hooks/useInputs';
import registerValidations from '../schemas/register';
import useAlert from '../hooks/userAlert';
// import validateInputsRegister from '../ValidatingFunctions/validatingFunctions';


function RegisterForm() {
  const [values, setValues] = useInputs({ email: '', name: '', password: '' });
  const [schemaStatus, setSchemaStatus] = useState({ valid: false, error: '' });
  const [buttonState, setButtonState] = useState(true);

  const { Alert, alertMessage, alertType, isVisible, showAlert } = useAlert();

  let history = useHistory();

  useEffect( async () => {
    showAlert(false);
    const { error } = registerValidations.validate(values);
    await setSchemaStatus({ valid: error === undefined, error: error ? error.message: '' })
    setButtonState(schemaStatus.valid === true ? false : true);
  }, [values]);

  const sendRegister = async (e) => {
    e.preventDefault();
    try {
      history.push('/customer/products');
      // const response = await axios.post('http://localhost:3001/register', {
      // name,
      // email,
      // password,
      // role: 'customer'
      // });
      if (response.message) throw new Error(response.message);
      
    } catch (error) {
      alertType('danger');
      alertMessage(error.message);
      showAlert(true);
    }
  };

  return (
    <div>
      <form onSubmit={ sendRegister }>
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
          type='submit'
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
