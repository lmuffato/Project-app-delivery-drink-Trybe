import React from 'react';
import '../styles/Sales.css';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function Sales() {
  const location = useLocation();

  const renderNavBar = () => {
    if (location.pathname !== 'login' && location.pathname !== 'register') {
      return (<NavBar />);
    }
  };

  return (
    <>
      { renderNavBar() }
      <div className="sales">
        <h1>MEUS PEDIDOS</h1>
      </div>
    </>
  );
}
