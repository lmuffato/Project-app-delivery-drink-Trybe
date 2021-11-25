import React from 'react';
import AdminCreateUser from '../components/AdminCreateUser';
import AdminUsersList from '../components/AdminUsersList';
import NavBar from '../components/NavBar';
import '../styles/Manage.css';

export default function Manage() {
  return (
    <>
      <NavBar />
      <AdminCreateUser />
      <AdminUsersList />
    </>
  );
}
