import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import RegisterErrorMessage from './components/RegisterErrorMessage';
import checkEmail from '../services/checkEmail';
import checkPassword from '../services/checkPassword';
import checkName from '../services/checkName';
import fetchRegister from '../services/fetchRegister';

import './styles/registerStyle.css';

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
    <div className="register-container">
      <h1 className="register-title">Cadastro</h1>
      <form className="register-form">
        <label htmlFor="name-input" className="register-name-label">
          <input
            id="name-input"
            type="text"
            data-testid="common_register__input-name"
            placeholder="Seu nome"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
            className="register-name"
          />
        </label>

        <label htmlFor="email-input" className="register-email-label">
          <input
            id="email-input"
            type="text"
            data-testid="common_register__input-email"
            placeholder="seu-email@site.com.br"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            className="register-email"
          />
        </label>

        <label htmlFor="password-input" className="register-password-label">
          <input
            id="password-input"
            type="password"
            data-testid="common_register__input-password"
            placeholder="********"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            className="register-password"
          />
        </label>
        <button
          id="register-btn"
          type="submit"
          disabled={ enableBtn }
          data-testid="common_register__button-register"
          onClick={ handleRegisterButtonClick }
          className="register-btn"
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
