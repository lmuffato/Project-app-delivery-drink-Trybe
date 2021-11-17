import React from 'react';
import Header from '../../components/Header';
import RequestCard from '../../components/RequestCard';
import styles from './styles.module.css';

export default function MyRequestsPage() {
  return (
    <main className={ styles.container }>
      <Header />
      <section className={ styles.requestsContainer }>
        <RequestCard
          requestId="001"
          status="pendente"
          date="17/11/21"
          price="50,90"
        />
        <RequestCard
          requestId="002"
          status="entregue"
          date="08/12/20"
          price="22,90"
        />
        <RequestCard
          requestId="003"
          status="preparando"
          date="11/10/21"
          price="145,90"
        />
      </section>
    </main>
  );
}
