import React, { useState, useContext, useEffect } from 'react';
import '../styles/form.css';
import Jwt from 'jsonwebtoken';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from './TextInput';
import Context from '../context/Context';
import regex from '../utils/regex';
import errorMap from '../utils/errorMap';

// zebirita@email.com
// $#zebirita#$

function LoginForm() {
  const { post } = useContext(Context);
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [invalidLogin, setInvalidLogin] = useState();
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    const { email, password } = loginForm;

    if (regex.email.test(email) && regex.password.test(password)) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [loginForm]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setInvalidLogin(null);
      const { data } = await post('login_form', loginForm);

      if (data.token) {
        const { email, name, role } = Jwt.decode(data.token);
        const { token } = data;
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify({ name, email, role, token }));

        const routes = {
          customer: '/customer/products',
          seller: '/seller/orders',
          administrator: '/admin/manage',
        };
        navigate(routes[role]);
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
          value={ loginForm.email }
          placeholder="email"
        />

        <TextInput
          name="password"
          type="password"
          dataTestId="common_login__input-password"
          onChange={ handleChange }
          placeholder="password"
          value={ loginForm.password }
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
