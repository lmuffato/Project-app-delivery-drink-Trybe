import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveUser } from '../redux/slices/userSlice';

export default function Register() {
  const [emailInput, setEmail] = useState('');
  const [passwordInput, setPassword] = useState('');
  const [nameInput, setName] = useState('');
  const [error, setError] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleButtonClick = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/register', {
      name: nameInput,
      email: emailInput,
      password: passwordInput,
    })
      .then(((res) => {
        const { name, email, role } = res.data.user;
        dispatch(saveUser({ name, email, role }));
        history.push('/customer/products');
      }))
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <main>
      <form>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            placeholder="Seu nome"
            data-testid="common_register__input-name"
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            placeholder="Seu email"
            data-testid="common_register__input-email"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            placeholder="Sua senha"
            data-testid="common_register__input-password"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="submit"
          onClick={ (e) => handleButtonClick(e) }
          data-testid="common_register__button-register"
        >
          Enviar
        </button>
        { error ? <p>Erro ao cadastrar</p> : null }
      </form>
    </main>
  );
}
