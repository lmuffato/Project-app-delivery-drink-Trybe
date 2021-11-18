import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import RequestCard from '../../components/RequestCard';
import fetchSales from '../../services/MyRequestsPage/fetchSales';
import formatDate from '../../services/MyRequestsPage/formatDate';
import styles from './styles.module.css';

export default function MyRequestsPage() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      const data = await fetchSales();
      setSales(data);
    };
    getSales();
  }, []);

  return (
    <main className={ styles.container }>
      <Header />
      <section className={ styles.requestsContainer }>
        {sales.map(({ id, totalPrice, status, saleDate }) => (
          <RequestCard
            key={ id }
            requestId={ id }
            status={ status }
            date={ formatDate(saleDate) }
            price={ totalPrice }
          />
        ))}
      </section>
    </main>
  );
}
