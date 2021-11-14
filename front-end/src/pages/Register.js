import React, { useContext, useEffect } from 'react';
import { RegisterContext } from '../../contexto/register';

function Register() {
  const { data, setData } = useContext(RegisterContext);

  const onChange = ({ target }) => {
    const { value, name } = target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const validateData = (name, senha, email) => {
    const mim = 11;
    const minPassword = 5;
    const isValidEmail = /\w+@\w+\.\w+/gi.test(email);

    if (name.length > mim && senha.length > minPassword && isValidEmail) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    const { name, password, email } = data;
    const reslt = validateData(name, password, email);
    setData({ ...data, disabledButton: reslt });
  }, [data.name, data.password, data.email]);

  return (
    <div>
      <h2>Cadastro</h2>
      <form onChange={ onChange }>
        <label htmlFor="userName">
          Nome:
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            id="userName"
          />
        </label>

        <label htmlFor="idEmail">
          E-mail:
          <input
            type="text"
            name="email"
            placeholder="seu-email@site.com.br"
            id="idEmail"
          />
        </label>

        <label htmlFor="idPassword">
          Senha:
          <input
            type="text"
            name="password"
            placeholder="*******"
            id="idPassword"
          />
        </label>

        <button
          type="submit"
          disabled={ data.disabledButton }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Register;
