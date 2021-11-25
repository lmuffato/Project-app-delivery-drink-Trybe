import React from 'react';
import { useHistory } from 'react-router-dom';
import notFoundImg from '../assets/images/john_travolta_notFound.gif';
import '../styles/NotFound.css';
import Button from '../components/atoms/Button';

export default function NotFound() {
  const history = useHistory();
  return (
    <div className="notFound">
      <h1>PÁGINA NÃO ENCONTRADA</h1>
      <img src={ notFoundImg } alt="notfound" />
      <Button className="btn-login bg-danger" text="VOLTAR" onClick={ history.goBack } />
    </div>
  );
}
