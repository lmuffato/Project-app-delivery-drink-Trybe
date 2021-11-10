import React, { useState } from 'react';

const Register = () => {
  const [userData, setUserData] = useState({
    inputName: '',
    inputEmail: '',
    inputPassword: '',
  });

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

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
