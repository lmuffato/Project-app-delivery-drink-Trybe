import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../Contexts/User/userContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hiddenError, setHiddenError] = useState(true);
  const { user, setUser } = useContext(UserContext);

  const history = useHistory();

  const validForm = () => {
    const passwordMinLength = 6;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email) || password.length < passwordMinLength) {
      return true;
    }
    return false;
  };

  const handleClick = async (userEmail, userPassword) => {
    const res = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userEmail, password: userPassword }),
    });
    const { data, token, error } = await res.json();

    if (error) {
      setHiddenError(false);
      setUser({ error });
    } else {
      setUser(data);
      const { name, role } = data;
      const infosUser = { name, email, role, token };
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(infosUser));

      if (data.role === 'administrator') {
        setHiddenError(true);
        history.push('/admin/manage');
      } else if (data.role === 'customer') {
        setHiddenError(true);
        history.push('/customer/products');
      } else {
        setHiddenError(true);
        history.push('/seller/orders');
      }
    }
  };

  const signUpRedirect = () => {
    const path = 'register';
    history.push(path);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="common_login__input-email"
        onChange={ (e) => setEmail(e.target.value) }
        value={ email }
        placeholder="email"
      />

      <input
        type="password"
        data-testid="common_login__input-password"
        onChange={ (e) => setPassword(e.target.value) }
        value={ password }
        placeholder="password"
      />

      <button
        type="button"
        disabled={ validForm() }
        data-testid="common_login__button-login"
        onClick={ () => handleClick(email, password) }
      >
        Entrar
      </button>

      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ signUpRedirect }
      >
        Registrar-se
      </button>

      <span
        data-testid="common_login__element-invalid-email"
        hidden={ hiddenError }
      >
        { user.error ? user.error : '' }
      </span>
    </div>
  );
}

export default Login;
