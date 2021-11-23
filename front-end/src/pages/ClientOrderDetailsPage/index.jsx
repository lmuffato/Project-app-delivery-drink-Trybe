/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import OrderDetails from '../../components/OrderDetails';
import fetchSale from '../../services/ClientOrderDetailsPage/fetchSale';
import styles from './styles.module.css';

export default function ClientOrderDetailsPage() {
  const [sale, setSale] = useState({});
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getSales = async () => {
      const data = await fetchSale(id);
      setProducts(data.sale.products);
      setQuantity(data.quantity);
      setSale(data.sale);
    };
    getSales();
  }, [id]);
  if (!sale) return 'Carregando...';
  return (
    <div className={ styles.container }>
      <Header />
      <OrderDetails saleData={ sale } products={ products } quantity={ quantity } />
    </div>
  );
}
