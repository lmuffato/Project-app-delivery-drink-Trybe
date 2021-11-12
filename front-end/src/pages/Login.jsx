import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();

  // const [user, setUser] = useState('');
  // const [password, setPassword] = useState('');
  // const [disableButton, setDisableButton] = useState(true);

  const handleChangeUser = ({ target }) => {
    const { value } = target;
    setUser(value);
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
          onChange={ handleChangeUser }
        />
        <input
          type="password"
          data-testid="common_login__input-password"
          placeholder="Senha"
          name="senha"
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          onClick={ () => history.push('/customer/products') }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          CADASTRE-SE
        </button>
      </form>
    </div>
  );
}
