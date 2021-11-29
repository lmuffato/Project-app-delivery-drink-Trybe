import React from 'react';
import NewUserFormFromAdmin from '../components/NewUserFormFromAdmin';
// import UserListForAdmin from '../components/UserListForAdmin';

function AdminManager() {
  return (
    <div>
      <header>CRIAR HEADER</header>
      <div>
        <h2>Cadastrar Novo Usuário</h2>
        <NewUserFormFromAdmin />
      </div>
      <div>
        <h1> Lista de Usuarios</h1>
        {/* <UserListForAdmin /> */}
      </div>
    </div>
  );
}

export default AdminManager;
