import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../assets/images/john_travolta_notFound.gif';
import '../styles/NotFound.css';
import Button from '../components/atoms/Button';

export default function NotFound() {
  return (
    <div className="notFound">
      <h1>PÁGINA NÃO ENCONTRADA</h1>
      <img src={ notFoundImg } alt="notfound" />
      <Link to="/products">
        <Button className="btn-login bg-danger" text="VOLTAR" />
      </Link>
    </div>
  );
}
