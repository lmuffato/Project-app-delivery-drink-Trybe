import React, { useState } from 'react';

function AdminForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('select');
  const [hiddenError, setHiddenError] = useState(true);

  const clearFields = () => {
    setName('');
    setEmail('');
    setPassword('');
    setType('select');
  };

  const validFields = () => {
    const nameMinLength = 12;
    const passwordMinLength = 6;
    const emailRegex = /\S+@\S+\.\S+/;

    if (name.length < nameMinLength) return true;
    if (password.length < passwordMinLength) return true;
    if (!emailRegex.test(email)) return true;
    if (type === 'select') return true;

    return false;
  };

  const registerUser = async () => {
    const token = localStorage.getItem('token');
    const conflictStatus = 409;

    const res = await fetch('http://localhost:3001/register/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({ name, email, password, type }),
    });

    if (res.status === conflictStatus) {
      setHiddenError(false);
    } else {
      setHiddenError(true);
      clearFields();
    }

    return true;
  };

  return (
    <div>
      <h3>Cadastrar novo usuário</h3>
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            data-testid="admin_manage__input-name"
            id="name"
            placeholder="Nome e sobrenome"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="text"
            data-testid="admin_manage__input-email"
            id="email"
            placeholder="seu-email@site.com.br"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            data-testid="admin_manage__input-password"
            id="password"
            placeholder="******"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <label htmlFor="type">
          Tipo:
          <select
            id="type"
            value={ type }
            onChange={ ({ target }) => setType(target.value) }
            data-testid="admin_manage__select-role"
          >
            <option value="select">select</option>
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>

        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ validFields() }
          onClick={ () => registerUser() }
        >
          Cadastrar
        </button>
      </form>
      <p data-testid="admin_manage__element-invalid-register" hidden={ hiddenError }>
        Usuário já registrado.
      </p>
    </div>
  );
}

export default AdminForm;
