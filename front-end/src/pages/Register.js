/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RegisterContext } from '../contexts/Register';

function Register() {
  const navigate = useNavigate();
  const { data, setData } = useContext(RegisterContext);

  const onChange = ({ target }) => {
    const { value, name } = target;

    setData({
      ...data,
      [name]: value,
      messageErr: '',
    });
  };

  const validateData = (name, senha, email) => {
    const mim = 12;
    const minPassword = 6;
    const isValidEmail = /\w+@\w+\.\w+/gi.test(email);

    if (name.length >= mim && senha.length >= minPassword && isValidEmail) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    const { name, password, email } = data;
    const reslt = validateData(name, password, email);
    setData({ ...data, disabledButton: reslt });
  }, [data.name, data.password, data.email]);

  const SubmitData = async (event) => {
    event.preventDefault();
    const { name, password, email } = data;
    try {
      await axios.post('http://localhost:3001/register', {
        name,
        email,
        password,
      })
        .then(({ data: { token, id, role } }) => localStorage
          .setItem('user', JSON
            .stringify({ id, name, email, role, token })));

      navigate('/customer/products');
    } catch ({ response }) {
      // Source: https://stackoverflow.com/questions/45017822/catching-error-body-using-axios-post
      setData({
        ...data,
        messageErr: response.data.data,
      });
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onChange={ onChange }>
        <label htmlFor="userName">
          Nome:
          <input
            data-testid="common_register__input-name"
            type="text"
            name="name"
            placeholder="Seu nome"
            id="userName"
          />
        </label>

        <label htmlFor="idEmail">
          E-mail:
          <input
            data-testid="common_register__input-email"
            type="text"
            name="email"
            placeholder="seu-email@site.com.br"
            id="idEmail"
          />
        </label>

        <label htmlFor="idPassword">
          Senha:
          <input
            data-testid="common_register__input-password"
            type="text"
            name="password"
            placeholder="*******"
            id="idPassword"
          />
        </label>

        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ data.disabledButton }
          onClick={ SubmitData }
        >
          Cadastrar
        </button>
      </form>
      <span
        data-testid="common_register__element-invalid_register"
      >
        {data.messageErr}
      </span>
    </div>
  );
}

export default Register;
