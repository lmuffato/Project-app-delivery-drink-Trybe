import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import { LoginProvider } from './contexts/Login';
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
      <Route exact path="/">
        {/* Source:  https://gist.github.com/mjackson/b5748add2795ce7448a366ae8f8ae3bb */}
        <Route path="/" element={ <Navigate replace to="/login" /> } />
      </Route>
      <Route
        exact
        path="/login"
        element={
          <LoginProvider>
            <Login />
          </LoginProvider>
        }
      />
      <Route exact path="/admin/manage" element={ <Admin /> } />
    </Routes>
  );
}

export default App;
