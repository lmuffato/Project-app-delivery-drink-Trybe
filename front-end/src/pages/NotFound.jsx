import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../assets/images/john_travolta_notFound.gif';

export default function NotFound() {
  return (
    <div className='NotFound'>
      <h1>PÁGINA NÃO ENCONTRADA</h1>
      <img src={ notFoundImg } alt="notfound" />
      <Link to="/products">Voltar</Link>
    </div>
  );
}
