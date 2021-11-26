import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../../components/Input';
import Table from '../../components/Table';
import api from '../../api';
import { useAuth } from '../../contexts/auth';
import Button from '../../components/Button';

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

  useEffect(() => {
    api.user.getAll(user.token).then(setUsers);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (users.length === 0) return <h1>Loading</h1>;

  const items = users.map((usr) => ({
    ...usr,
  }));

  return (
    <AdminContainer>
      <h2>Cadastrar novo produto</h2>
      <form className="container">
        <Input label="Nome" datatestid="admin_manage__input-name" />
        <Input label="Email" datatestid="admin_manage__input-email" />
        <Input label="Senha" datatestid="admin_manage__input-password" />
        <select data-testid="admin_manage__select-role">
          <option value="customer">Consumidor</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
        </select>
        <Button datatestid="admin_manage__button-register">
          CADASTRAR
        </Button>
      </form>
      <h2>Lista de usuários</h2>
      <div className="container">
        <Table items={ items } type="admin" />
      </div>
    </AdminContainer>
  );
}

export default AdminManegement;
