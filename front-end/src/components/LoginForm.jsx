import React, { useState, useContext, useEffect } from 'react';
import '../styles/form.css';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from './TextInput';
import Context from '../context/Context';
import regex from '../utils/regex';
import errorMap from '../utils/errorMap';

function LoginForm() {
  const { handleChange, submitChange, setUser, user } = useContext(Context);
  const navigate = useNavigate();
  const [invalidLogin, setInvalidLogin] = useState();
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    setUser({ email: '', password: '' });

    return () => setUser({});
  }, []); // eslint-disable-line

  useEffect(() => {
    const { email, password } = user;

    if (regex.email.test(email) && regex.password.test(password)) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    try {
      setInvalidLogin(null);
      const { data } = await submitChange(e, 'login_form');

      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/customer/products');
      }
    } catch ({ response }) {
      const { status } = response;
      setInvalidLogin(errorMap[status || '500']);
    }
  };

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
          name="password"
          type="password"
          dataTestId="common_login__input-password"
          onChange={ handleChange }
          placeholder="password"
        />

        <span
          hidden={ !invalidLogin }
          data-testid="common_login__element-invalid-email"
        >
          { invalidLogin }
        </span>

        <button
          type="submit"
          data-testid="common_login__button-login"
          onClick={ handleSubmit }
          disabled={ disableButton }
        >
          Login
        </button>

        <Link
          to="/"
          className="input"
        >
          Esqueceu a senha?
        </Link>

        <button
          type="button"
          onClick={ () => navigate('/register') }
          className="input"
          data-testid="common_login__button-register"
        >
          Cadastre-se
        </button>

      </form>
    </div>
  );
}

export default LoginForm;
