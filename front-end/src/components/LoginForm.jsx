import React, { useContext, useEffect } from 'react';
import '../styles/form.css';
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import Context from '../context/Context';

function LoginForm() {
  const { handleChange, submitChange, resetUser } = useContext(Context);

  useEffect(() => {
    resetUser();

    return () => resetUser();
  }, []);

  return (
    <div className="border">
      <form action="submit">
        <TextInput
          name="email"
          dataTestId="common_login__input-email"
          onChange={ handleChange }
          placeholder="email"
        />

        <TextInput
          name="pasword"
          dataTestId="common_login__input-pasword"
          onChange={ handleChange }
          placeholder="password"
        />

        <button
          type="submit"
          data-testid="common_login__button-login"
          onClick={ (e) => submitChange(e, 'login_form') }
        >
          Login
        </button>

        <Link
          to="/"
          className="input"
        >
          Esqueceu a senha?
        </Link>

        <Link
          to="/register"
          className="input"
          data-testid="common_login__button-register"
        >
          Cadastre-se

        </Link>

      </form>
    </div>
  );
}

export default LoginForm;
