import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ErrorLogin from '../Components/ErrorLogin';

import validateEmail from '../validations/validateEmail';

import { createNewUser } from '../services/endpointsAPI';

const testId = 'common_register__element-invalid_register';
const messageError = 'Nome e/ou email já cadastrado';

export default function Register() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableRegisterButton, setDisableRegisterButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const clickCadastrarButton = async () => {
    try {
      await createNewUser(name, email, password);
      setErrorMessage(false);
      history.push('/customer/products');
    } catch (error) {
      setErrorMessage(true);
    }
  };

  const handleChange = (target) => {
    const { id, value } = target;
    if (id === 'user-name') setName(value);
    if (id === 'user-email') setEmail(value);
    if (id === 'user-password') setPassword(value);
  };

  useEffect(() => {
    const validateFields = () => {
      const twelveNumber = 12;
      const sixNumber = 6;
      const validEmail = validateEmail(email);
      const validName = name.length >= twelveNumber;
      const validPassword = password.length >= sixNumber;
      return (validEmail && validName && validPassword);
    };
    setDisableRegisterButton(validateFields());
  }, [name, email, password]);

  return (
    <main>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="user-name">
          Nome
          <input
            type="text"
            id="user-name"
            placeholder="Seu nome"
            value={ name }
            onChange={ (e) => handleChange(e.target) }
            data-testid="common_register__input-name"
          />
        </label>
        <label htmlFor="user-email">
          Email
          <input
            type="email"
            id="user-email"
            placeholder="seu-email@site.com.br"
            value={ email }
            onChange={ (e) => handleChange(e.target) }
            data-testid="common_register__input-email"

          />
        </label>
        <label htmlFor="user-password">
          Senha
          <input
            type="password"
            id="user-password"
            placeholder="**********"
            value={ password }
            onChange={ (e) => handleChange(e.target) }
            data-testid="common_register__input-password"
          />
        </label>
        <button
          type="button"
          id="register-button"
          disabled={ !disableRegisterButton }
          dataTestId="common_register__button-register"
          onClick={ clickCadastrarButton }
        >
          CADASTRAR
        </button>
      </form>
      {
        errorMessage
          && <ErrorLogin props={ { dataTestIdError: testId, message: messageError } } />
      }
    </main>
  );
}
