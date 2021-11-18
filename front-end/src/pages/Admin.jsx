// import React from 'react';
// import UserForm from '../components/UserForm';

// function Admin() {
//   return (
//     <main>
//       <UserForm />
//     </main>
//   );
// }

import React from 'react';
// import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import UserForm from '../components/UserForm';

const testIds = {
  pageId: 'customer_products__element-navbar-link-orders',
  userId: 'customer_products__element-navbar-user-full-name',
};

const navegationNames = {
  pageName: 'Gerenciar usuários',
  userName: 'Admin',
};

function Admin() {
  return (
    <div>
      <NavBar ids={ testIds } names={ navegationNames } />
      <UserForm />
    </div>
  );
}

export default Admin;
