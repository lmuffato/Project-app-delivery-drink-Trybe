import React, { useState } from 'react';
import Input from './atoms/Input';
import Button from './atoms/Button';
import testID from '../datatestids.json';
import { registerAction } from '../utils/API/fetch';
import validateRegister from '../utils/validations/joi/adminRegister';

export default function AdminCreateUser() {
  const [register, setRegister] = useState({
    fullName: '',
    email: '',
    password: '',
    role: '',
  });
  const { fullName, email, password, role } = register;

  const handleChange = ({ target: { name, value } }) => {
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const newUser = await registerAction({ fullName, email, password, role });
    console.log(newUser);
  };

  return (
    <section className="create-user">
      <h5>Cadastrar novo usuário</h5>
      <form>
        <p>Nome</p>
        <Input
          className="register-name"
          type="text"
          name="fullName"
          data-testid={ testID[65] }
          value={ fullName }
          onChange={ handleChange }
        />
        <p>Email</p>
        <Input
          className="register-email"
          name="email"
          type="email"
          data-testid={ testID[66] }
          value={ email }
          onChange={ handleChange }
        />
        <p>Senha</p>
        <Input
          className="register-password"
          name="password"
          type="password"
          data-testid={ testID[78] }
          value={ password }
          onChange={ handleChange }
        />
        <p>Tipo</p>
        <select
          className="register-role"
          type="select"
          name="role"
          data-testid={ testID[68] }
          onChange={ handleChange }
        >
          <option disabled selected>Selecione...</option>
          <option value="customer">Cliente</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Admin</option>
        </select>
        <Button
          type="button"
          data-testid={ testID[69] }
          disabled={
            validateRegister.validate({ fullName, email, password, role }).error
          }
          onClick={ handleClick }
          text="Cadastrar"
        />
      </form>
    </section>
  );
}
