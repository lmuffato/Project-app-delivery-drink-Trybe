import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import RequestCard from '../../components/RequestCard';
import useFetch from '../../hooks/useFetch';
import { dataTestIdsClientMyRequest } from '../../utils/dataTestIds';
import { saleEndPointData } from '../../utils/endPointsData';
import formatDate from '../../utils/formatDate';
import styles from './styles.module.css';

export default function MyRequestsPage() {
  const { endpoint } = saleEndPointData;
  const { data: sales, loading, error } = useFetch(endpoint);

  if (loading) return <span>Carregando...</span>;

  if (error) console.log(error);

  return (
    <main className={ styles.container }>
      <Header />
      <section className={ styles.requestsContainer }>
        {sales.map((sale) => (
          <Link key={ sale.id } to={ `/customer/orders/${sale.id}` }>
            <RequestCard
              dataTestId={ dataTestIdsClientMyRequest }
              requestId={ sale.id }
              status={ sale.status }
              date={ formatDate(sale.saleDate) }
              price={ sale.totalPrice }
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
