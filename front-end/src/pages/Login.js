import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [error, setError] = useState(true);

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
    const data = await res.json();
    setUser(data);
    if (data.error) {
      setError(false);
    } else {
      setError(true);
    }
    // console.log(data);
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
        // onClick={ () => () }
      >
        Registrar-se
      </button>

      <span
        data-testid="common_login__element-invalid-email"
        hidden={ error }
      >
        { user.error ? user.error : '' }
      </span>
    </div>
  );
}

export default Login;
