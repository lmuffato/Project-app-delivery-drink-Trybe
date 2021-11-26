import React, { useState, useEffect, useContext } from 'react';
import TextInput from '../components/TextInput';
import Context from '../context/Context';
import regex from '../utils/regex';
import errorMap from '../utils/errorMap';

function AdminManage() {
  const { post } = useContext(Context);
  const [userForm, setuserForm] = useState({
    name: '', email: '', password: '', role: 'seller' });
  const [disableButton, setDisableButton] = useState(true);
  const [invalidLogin, setInvalidLogin] = useState();
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
    try {
      setInvalidLogin(null);

      const { data } = await post('admin_register', userForm);
      console.log(data);
    } catch (error) {
      console.log(error);
      const { response } = error;
      const { status } = response;
      setInvalidLogin(errorMap[status || '409']);
    }
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
            name="role"
            data-testid="admin_manage__select-role"
            onChange={ handleChange }
          >
            <option value="seller">Vendedor</option>
            <option value="costumer">Cliente</option>
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
        <span
          hidden={ !invalidLogin }
          data-testid="admin_manage__element-invalid-register"
        >
          { invalidLogin }
        </span>
      </div>
    </div>
  );
}

export default AdminManage;
