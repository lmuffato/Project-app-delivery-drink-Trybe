import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import Navbar from '../Navbar';

function AppContainer() {
  const { authed, user } = useAuth();

  if (!authed) { return <Navigate to="/login" />; }

  return (
    <div>
      <Navbar userType={ user.role } username={ user.name } />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppContainer;
