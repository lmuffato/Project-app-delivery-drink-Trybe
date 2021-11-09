import React, { useContext } from 'react';
import '../styles/form.css';
import Context from '../context/Context';

function Registration() {
  const { handleChange, submitChange } = useContext(Context);

  return (
    <div className="border">
      <h1>Cadastro</h1>
      <form action="submit">
        <label htmlFor="name">
          <input
            className="input"
            type="text"
            name="name"
            data-testid="common_register__input-name"
            onChange={ (e) => handleChange(e) }
            placeholder="Seu Nome"
          />
        </label>
        <label htmlFor="email">
          <input
            className="input"
            type="text"
            name="email"
            data-testid="common_register__input-email"
            onChange={ (e) => handleChange(e) }
            placeholder="email@email.com"
          />
        </label>
        <label htmlFor="passsword">
          <input
            className="input"
            type="text"
            name="passsword"
            data-testid="common_register__input-password"
            onChange={ (e) => handleChange(e) }
            placeholder="******"
          />
        </label>
        <button
          type="submit"
          data-testid="common_register__input-register"
          onClick={ submitChange }
        >
          Cadastrar
        </button>
      </form>
      <span
        hidden="true"
        data-testid="common_register__element-invalid_register"
      >
        error se tiver
      </span>
    </div>
  );
}

export default Registration;
