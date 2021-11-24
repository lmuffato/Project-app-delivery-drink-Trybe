import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import useInputs from '../../hooks/useInputs';
import registerSchema from '../../schemas/register';

function AdmForm() {
  const [
    inputsValues,
    setInputsValues,
  ] = useInputs({ name: '', email: '', password: '', role: 'seller' });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { Alert, alertIsVisible,
    authAdmFormSubmit, validateForm } = useContext(AuthContext);

  useEffect(() => {
    const formValidation = validateForm({ schema: registerSchema, values: inputsValues });
    setButtonDisabled(!formValidation.isValid);
  }, [inputsValues, validateForm]);

  async function register(event) {
    await authAdmFormSubmit(event, {
      formSchema: registerSchema,
      formValues: inputsValues,
    });
    console.log('executou a funcao');
  }

  return (
    <div style={ { display: 'flex' } }>
      { alertIsVisible && (
        <Alert dataTestId="admin_manage__element-invalid-register" />
      ) }
      <form
        onSubmit={ register }
        style={ {
          position: 'fixed',
          marginTop: '100px',
          flexDirection: 'row',
        } }
      >
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            onChange={ setInputsValues }
            data-testid="admin_manage__input-name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            onChange={ setInputsValues }
            data-testid="admin_manage__input-email"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            onChange={ setInputsValues }
            data-testid="admin_manage__input-password"
          />
        </label>
        <select
          id="role"
          onChange={ setInputsValues }
          data-testid="admin_manage__select-role"
          defaultValue="seller"
        >
          Tipo
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
        </select>
        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ buttonDisabled }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default AdmForm;
