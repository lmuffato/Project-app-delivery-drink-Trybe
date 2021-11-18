import React from 'react';
import NewUserForm from '../components/NewUserForm';

function AdminManager() {
  return (
    <div>
      <header>CRIAR HEADER</header>
      <div>
        <h2>Cadastrar Novo Usuário</h2>
        <NewUserForm />
      </div>
      <h1> Lista de Usuarios</h1>
    </div>
  );
}

export default AdminManager;
