import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import { MdDeliveryDining } from 'react-icons/md';

const list = () => (
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link
          className="nav-link active"
          aria-current="page"
          to="/products"
        >
          PRODUTOS
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/sales">MEUS PEDIDOS</Link>
      </li>
    </ul>
  </div>
);

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="backToHome navbar-brand" to="/products">
          <MdDeliveryDining className="deliveryIcon" />
          <p>Delivery App</p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {list()}
        <Link className="navbar-brand" to="users/:id">Fulano de Tal</Link>
        <Link className="navbar-brand" to="/login">sair</Link>
      </div>
    </nav>
  );
}
