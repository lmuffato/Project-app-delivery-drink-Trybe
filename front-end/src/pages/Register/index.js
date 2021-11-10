import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { IoMdBeer } from 'react-icons/io';
import Input from '../../components/Input';
import LeftSide from '../../components/LeftSide';
import './style.css';

function RegisterPage() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const history = useHistory();
  const checkEmail = () => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email);
  const minLengthPassword = 6;
  const minLengthName = 12;
  const checkName = () => name.length >= minLengthName;
  const checkPass = () => password.length >= minLengthPassword;

  const handleRegister = async () => {
    const passHash = MD5(password).toString();
    const response = await api.getRegister(name, email, passHash);
    if (response.error) {
      setError('Login inválido');
      return;
    }
    history.push('/customer/products');
  };

  return (
    <section className="register-page">
      <LeftSide />
      <div className="right-side">
        <h1>
          dev
          <span className="beer">Beer</span>
          <IoMdBeer />
        </h1>
        <div className="register-container">
          <Input
            type="text"
            value={ name }
            dataid="common_register__input-name"
            placeholder="Seu nome"
            setValue={ setName }
          />
          <Input
            type="email"
            value={ email }
            setValue={ setEmail }
            dataid="common_register__input-email"
            placeholder="fulano@yahoo.com"
          />
          <Input
            type="password"
            value={ password }
            setValue={ setPassword }
            dataid="common_register__input-password"
            placeholder="********"
          />
          <button
            type="button"
            data-testid="common_register__button-register"
            disabled={ !(checkEmail() && checkPass() && checkName()) }
            onClick={ handleRegister }
          >
            Cadastrar
          </button>
          <Link to="/" className="return">Voltar</Link>
          {error && (
            <p data-testid="common_register__element-invalid_register">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
