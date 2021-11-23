import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import RegisterErrorMessage from './components/RegisterErrorMessage';
import checkEmail from '../services/checkEmail';
import checkPassword from '../services/checkPassword';
import checkName from '../services/checkName';
import fetchRegister from '../services/fetchRegister';

function Register({ history }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableBtn, setEnableBtn] = useState(true);
  const [registerError, setRegisterError] = useState('');

  useEffect(() => {
    if (checkEmail(email) && checkPassword(password) && checkName(name)) {
      setEnableBtn(false);
    } else {
      setEnableBtn(true);
    }
  }, [name, email, password]);

  const handleRegisterButtonClick = async (e) => {
    e.preventDefault();
    setRegisterError('');
    const response = await fetchRegister(name, email, password);
    setRegisterError(response.message);
    if (!response.message) {
      localStorage.setItem('user', JSON.stringify(response));
      return history.push('/customer/products');
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="name-input">
          <input
            id="name-input"
            type="text"
            data-testid="common_register__input-name"
            placeholder="Seu nome"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </label>

        <label htmlFor="email-input">
          <input
            id="email-input"
            type="text"
            data-testid="common_register__input-email"
            placeholder="seu-email@site.com.br"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>

        <label htmlFor="password-input">
          <input
            id="password-input"
            type="password"
            data-testid="common_register__input-password"
            placeholder="********"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          id="register-btn"
          type="submit"
          disabled={ enableBtn }
          data-testid="common_register__button-register"
          onClick={ handleRegisterButtonClick }
        >
          Cadastrar
        </button>

        { registerError
          ? <RegisterErrorMessage errorMessage={ registerError } />
          : ''}
      </form>
    </div>
  );
}

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Register;
