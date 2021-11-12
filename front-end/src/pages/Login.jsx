import React, { useState } from 'react';

// import { useHistory } from 'react-router-dom';

const axios = require('axios').default;

export default function Login() {
  // const history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  // const [disableButton, setDisableButton] = useState(true);

  const handleChange = ({ target }, handle) => {
    const { value } = target;
    handle(value);
  };

  const handleLogin = async () => {
    try {
      console.log('xablay');
      axios.get('/users/login', { email: user, password })
        .then((response) => { console.log(response); })
        .catch((error) => { console.log(error); });
      // const response = await axios.get('http://localhost:3001/sales');
      //   method: 'get',
      //   url: 'http://localhost:3001/sales',
      //   // email: user,
      //   // password,
      // });
      // const response = await fetch('http://localhost:3001/carlos');
      console.log('a');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          data-testid="common_login__input-email"
          placeholder="Email"
          name="email"
          value={ user }
          onChange={ (e) => handleChange(e, setUser) }
        />
        <input
          type="password"
          data-testid="common_login__input-password"
          placeholder="Senha"
          value={ password }
          onChange={ (e) => handleChange(e, setPassword) }
          name="senha"
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          onClick={ () => handleLogin() }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          // onClick={ () =>  }
        >
          CADASTRE-SE
        </button>
      </form>
    </div>
  );
}
