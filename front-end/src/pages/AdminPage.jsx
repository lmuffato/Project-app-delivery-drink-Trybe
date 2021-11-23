import React from 'react';
import NavBar from '../components/NavBar';
import AdmForm from '../components/admForm/admForm';

export default function AdminPage({ location }) {
  return (
    <div>
      <NavBar location={ location } />
      <AdmForm />
    </div>
  );
}
