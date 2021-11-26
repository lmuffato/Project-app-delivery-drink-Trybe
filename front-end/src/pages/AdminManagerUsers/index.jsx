import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import FormRegisterUser from './FormRegisterUser';
import './styles.css';

const AdminManagerUsers = () => (
  <main className="c_adminManagerUsersPage">
    <NavBar />
    <FormRegisterUser />
  </main>
);

export default AdminManagerUsers;
