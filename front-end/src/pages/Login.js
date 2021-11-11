import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginButton = async (userEmail, userPassword) => {
    const res = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userEmail, password: userPassword }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <input
        type="text"
        onChange={ (e) => setEmail(e.target.value) }
        value={ email }
        placeholder="email"
      />

      <input
        onChange={ (e) => setPassword(e.target.value) }
        value={ password }
        placeholder="password"
      />

      <button type="button" onClick={ () => loginButton(email, password) }>Entrar</button>
    </div>
  );
}

export default Login;
