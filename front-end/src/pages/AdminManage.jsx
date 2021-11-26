/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import TextInput from '../components/TextInput';
import regex from '../utils/regex';

function AdminManage() {
  const [userForm, setuserForm] = useState({
    name: '', email: '', password: '', role: 'seller' });
  const [disableButton, setDisableButton] = useState(true);
  const L = 12;

  const validate = (email, password) => {
    if (regex.email.test(email) && regex.password.test(password)) { return true; }
  };

  useEffect(() => {
    const { name, email, password } = userForm;

    if (validate(email, password) && name.length > L) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [userForm]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setuserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userForm);
    // try {
    //   const { data } = await post('admin_register', userForm);
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div>
      Cadastrar novo usurário
      <br />
      <br />

      <div>
        <form action="submit">
          <span>Nome</span>
          <TextInput
            name="name"
            dataTestId="admin_manage__input-name"
            onChange={ handleChange }
            value={ userForm.name }
            placeholder="Nome e sobrenome"
          />
          <br />

          <span>Email</span>
          <TextInput
            name="email"
            dataTestId="admin_manage__input-email"
            onChange={ handleChange }
            value={ userForm.email }
            placeholder="seu-email@site.com.br"
          />
          <br />

          <span>Senha</span>
          <TextInput
            name="password"
            type="password"
            dataTestId="admin_manage__input-password"
            onChange={ handleChange }
            placeholder="********"
            value={ userForm.password }
          />
          <br />

          <span>Tipo</span>
          <select
            data-testid="admin_manage__select-role"
            onChange={ handleChange }
          >
            <option value="seller">Vendedor</option>
            <option value="consumer">Cliente</option>
            <option value="administrator">Administrador</option>

          </select>
          <br />
          <br />

          <button
            type="submit"
            data-testid="admin_manage__button-register"
            onClick={ handleSubmit }
            disabled={ disableButton }

          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminManage;
