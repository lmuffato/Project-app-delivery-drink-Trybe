import React, { useState, useEffect } from 'react';
import useInputs from '../hooks/useInputs';
import registerValidations from '../schemas/register';
// import validateInputsRegister from '../ValidatingFunctions/validatingFunctions';


function RegisterForm() {
  const [values, setValues] = useInputs({ email: '', name: '', password: '' });
  const [schemaStatus, setSchemaStatus] = useState({ valid: false, error: '' });
  const [buttonState, setButtonState] = useState(true);

  useEffect( async () => {
    const { error } = registerValidations.validate(values);
    await setSchemaStatus({ valid: error === undefined, error: error ? error.message: '' })
    setButtonState(schemaStatus.valid === true ? false : true);
  }, [values]);

  // sendRegister = (e) => {
  //   e.preventDefault()
  // };

  return (
    <div>
      <form>
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
      <p
        data-testid={ `common_register__element-invalid_register 
        [Elemento oculto (Mensagens de erro)]` }
        style={ { visibility: 'hidden' } }
      >
        elemento oculto
      </p>
    </div>
  );
}

export default RegisterForm;
