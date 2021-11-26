import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import validator from 'validator';
import Input from '../../components/Input';
import Table from '../../components/Table';
import api from '../../api';
import { useAuth } from '../../contexts/auth';
import Button from '../../components/Button';

const MIN_NAME_LENGTH = 12;
const MIN_PASSWORD_LENGTH = 6;

const AdminContainer = styled.div`
  .container {
    padding: 20px;
    box-shadow: 0 0 8px 0 ${({ theme }) => theme.shadow};
  } 
  form {
    display: flex;
    justify-content: space-between;
  }
`;

function AdminManegement() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('customer');
  const [invalidInfo, setInvalidInfo] = useState('');

  const getAllUsers = () => {
    api.user.getAll(user.token).then(setUsers);
  };

  const createUser = (ev) => {
    console.log(user);
    ev.preventDefault();
    api.user.createUser(name, email, password, { role, token: user.token })
      .then(getAllUsers).catch((x) => setInvalidInfo(x.message));
  };

  const deleteUser = (userData) => {
    api.user.deleteUser(userData.id, user.token)
      .then(getAllUsers);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getAllUsers, []);

  if (users.length === 0) return <h1>Loading</h1>;

  const items = users.map((usr) => ({
    ...usr,
  }));

  const validateInputs = name.length < MIN_NAME_LENGTH
  || !validator.isEmail(email) || password.length < MIN_PASSWORD_LENGTH;

  return (
    <AdminContainer>
      <h2>Cadastrar novo produto</h2>
      <form className="container" onSubmit={ createUser }>
        <Input
          label="Nome"
          datatestid="admin_manage__input-name"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
        />
        <Input
          label="Email"
          datatestid="admin_manage__input-email"
          type="email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        <Input
          label="Senha"
          datatestid="admin_manage__input-password"
          type="password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
        <select
          data-testid="admin_manage__select-role"
          value={ role }
          onChange={ ({ target: { value } }) => setRole(value) }
        >
          <option value="customer">Consumidor</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
        </select>
        <Button
          datatestid="admin_manage__button-register"
          disabled={ validateInputs }
          type="submit"
        >
          CADASTRAR
        </Button>
        {invalidInfo && (
          <p
            data-testid="admin_manage__element-invalid-register"
          >
            {invalidInfo}
          </p>
        )}
      </form>
      <h2>Lista de usuários</h2>
      <div className="container">
        <Table items={ items } onDelete={ deleteUser } type="admin" />
      </div>
    </AdminContainer>
  );
}

export default AdminManegement;
