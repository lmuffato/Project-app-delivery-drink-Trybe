import React from 'react';
import { Link } from 'react-router-dom';
import { MdDeliveryDining } from 'react-icons/md';
import ListNavLinks from './molecules/ListNavLinks';
import '../styles/NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="backToHome navbar-brand" to="/products">
          <MdDeliveryDining className="deliveryIcon" />
          <p>Delivery App</p>
        </Link>
        <ListNavLinks />
        <Link className="navbar-brand" to="users/:id">Fulano de Tal</Link>
        <Link className="navbar-brand" to="/login">sair</Link>
      </div>
    </nav>
  );
}
