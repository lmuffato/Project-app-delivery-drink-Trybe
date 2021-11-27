import React from 'react';
import NavBar from '../components/NavBar';
import UserForm from '../components/UserForm';
import UsersTable from '../components/UsersTable';
import { UsersProvider } from '../contexts/Users';

const testIds = {
  pageOrdersId: 'customer_products__element-navbar-link-orders',
  userId: 'customer_products__element-navbar-user-full-name',
};

const navegationNames = {
  pageName: 'Gerenciar usuários',
};

function Admin() {
  return (
    <div>
      <UsersProvider>
        <NavBar ids={ testIds } names={ navegationNames } />
        <UserForm />
        <UsersTable />
      </UsersProvider>
    </div>
  );
}

export default Admin;
