import React, { useContext, useEffect } from 'react';
import '../styles/form.css';
import Context from '../context/Context';
import TextInput from './TextInput';

function Registration() {
  const { handleChange, submitChange, resetUser } = useContext(Context);

  useEffect(() => {
    resetUser();

    return () => resetUser();
  }, []);

  return (
    <div className="border">
      <h1>Cadastro</h1>
      <form action="submit">
        <TextInput
          name="name"
          dataTestId="common_register__input-name"
          onChange={ handleChange }
          placeholder="Seu Nome"
        />
        <TextInput
          name="email"
          dataTestId="common_register__input-email"
          onChange={ handleChange }
          placeholder="email@email.com"
        />
        <TextInput
          name="password"
          dataTestId="common_register__input-password"
          onChange={ handleChange }
          placeholder="******"
        />
        <button
          type="submit"
          data-testid="common_register__input-register"
          onClick={ (e) => submitChange(e, 'register_form') }
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
