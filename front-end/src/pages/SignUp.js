import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [newUser, setNewUser] = useState({});
  const [error, setError] = useState(true);

  const validForm = () => {
    const passwordMinLength = 6;
    const nameMaxLength = 12;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)
      || password.length < passwordMinLength || name.length < nameMaxLength) {
      return true;
    }
    return false;
  };

  const handleClick = async (e, userEmail, userPassword, userName) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: userName, email: userEmail, password: userPassword }),
    });
    const data = await res.json();
    setNewUser({ data });
    if (data.error) {
      setError(false);
    } else {
      setError(true);
    }
    console.log(data);
    console.log(data.error);
    console.log(name);
  };

  return (
    <div>
      <h1>Cadastre-se</h1>
      <form>
        <input
          type="text"
          name="nome"
          id="nome"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
          placeholder="Seu nome"
          data-testid="common_register__input-name"
        />
        <input
          type="email"
          name="email"
          id="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          placeholder="Digite seu email"
          data-testid="common_register__input-email"
        />
        <input
          type="password"
          name="password"
          id="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          placeholder="Digite uma senha"
          data-testid="common_register__input-password"
        />

        <button
          type="submit"
          disabled={ validForm() }
          data-testid="common_register__button-register"
          onClick={ handleClick }
        >
          Cadastrar
        </button>
        <span
          data-testid="common_login__element-invalid-email"
          hidden={ error }
        >
          { newUser.error ? newUser.error : '' }
        </span>
      </form>
    </div>
  );
}

export default SignUp;
