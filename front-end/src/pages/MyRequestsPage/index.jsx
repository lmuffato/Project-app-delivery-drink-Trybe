import React from 'react';
import Header from '../../components/Header';
import RequestCard from '../../components/RequestCard';
import styles from './styles.module.css';

export default function MyRequestsPage() {
  return (
    <main className={ styles.container }>
      <Header />
      <section className={ styles.requestsContainer }>
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </section>
    </main>
  );
}
