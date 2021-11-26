import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../contexts/auth';
import Navbar from '../Navbar';

const Container = styled.div`
  .navbar {
    margin-bottom: 50px;
  }
  .main-wrapper {
    max-width: 1100px;
    position: relative;
    padding: 50px 0;
    margin: 0 auto;
  }
`;

function AppContainer() {
  const { authed, user } = useAuth();

  if (!authed) { return <Navigate to="/login" />; }

  return (
    <Container>
      <Navbar userType={ user.role } username={ user.name } />
      <main className="main-wrapper">
        <Outlet />
      </main>
    </Container>
  );
}

export default AppContainer;
