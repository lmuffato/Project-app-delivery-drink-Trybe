import React from 'react';
import '../styles/Products.css';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function Products() {
  const location = useLocation();

  const renderNavBar = () => {
    if (location.pathname !== 'login' && location.pathname !== 'register') {
      return (<NavBar />);
    }
  };

  return (
    <>
      { renderNavBar() }
      <div className="products">
        <h1>PRODUTOS</h1>
      </div>
    </>
  );
}
