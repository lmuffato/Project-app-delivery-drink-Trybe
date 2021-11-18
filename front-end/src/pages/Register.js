import React, { useState, useEffect } from 'react';
import postUser from '../services/requests';

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });
  const [userErr, setUserErr] = useState('');

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  async function createUser() {
    const result = await postUser(userData, 'register');
    if (result.message) setUserErr(result.message);
  }

  useEffect(() => {
    const validateButton = document.querySelector('button');
    const { email, name, password } = userData;
    const validateEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    const validateName = new RegExp(/[\w\D]{12}/g).test(name);
    const validatePassword = new RegExp(/[\w\D]{6}/g).test(password);

    if (validateEmail && validateName && validatePassword) {
      validateButton.disabled = false;
    } else {
      validateButton.disabled = true;
    }
  });

  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="common_register__input-name"
            name="name"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="input"
            data-testid="common_register__input-email"
            name="email"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="input"
            data-testid="common_register__input-password"
            name="password"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="role">
          Cliente
          <input
            type="radio"
            id="input"
            value="customer"
            name="role"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="role">
          Vendedor
          <input
            type="radio"
            id="input"
            value="seller"
            name="role"
            onChange={ handleInputChange }
          />
        </label>
        <button
          type="button"
          data-testid="common_register__button-register"
          onClick={ createUser }
        >
          Cadastrar
        </button>
        {
          userErr && (
            <span>{ userErr }</span>
          )
        }
      </form>
    </div>
  );
};

export default Register;
