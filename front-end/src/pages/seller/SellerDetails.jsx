import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function BodySeller() {
  const [sales, setSales] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:3001/sales/${id}`)
      .then(({ data }) => setSales(data))
      .catch(() => console.log('deu ruim'));
  }, []);
  console.log(sales);
  // if (sales.length < 1) return <p>loading ...</p>;
  return (
    <p> Página de Teste </p>
  );
}
