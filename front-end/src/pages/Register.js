import React, { useState, useEffect } from 'react';

const Register = () => {
  const [userData, setUserData] = useState({
    inputName: '',
    inputEmail: '',
    inputPassword: '',
  });

  const validateButton = document.querySelector('button');

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  useEffect(() => {
    const { inputEmail, inputName, inputPassword } = userData;
    const validateEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(inputEmail);
    const validateName = new RegExp(/[\w\D]{12}/g).test(inputName);
    const validatePassword = new RegExp(/[\w\D]{6}/g).test(inputPassword);

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
        <label htmlFor="inputName">
          Nome
          <input
            data-testid="common_register__input-name"
            name="inputName"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="inputEmail">
          Email
          <input
            id="input"
            data-testid="common_register__input-email"
            name="inputEmail"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="inputPassword">
          Senha
          <input
            id="input"
            data-testid="common_register__input-password"
            name="inputPassword"
            onChange={ handleInputChange }
          />
        </label>
        <button
          type="button"
          data-testid="common_register__button-register"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;
