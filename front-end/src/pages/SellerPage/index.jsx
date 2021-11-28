import React from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import RequestCard from '../../components/RequestCard';
import styles from './styles.module.css';
import { dataTestisSeller } from '../../utils/dataTestIds';
import Header from '../../components/Header';
import useFetch from '../../hooks/useFetch';
import { saleEndPointData } from '../../utils/endPointsData';

export default function SellerPage() {
  const { endpoint } = saleEndPointData;
  const { data: sales, error, loading } = useFetch(endpoint);

  const userStorage = localStorage.getItem('user');
  let user = null;
  if (userStorage) {
    user = JSON.parse(userStorage);
  }

  const filterSaleSeller = () => {
    const salesSeller = sales.filter((sale) => sale.sellerId === user.id);
    return salesSeller;
  };

  if (loading) return <span>Carregando...</span>;

  if (error) console.log(error);

  return (
    <main className={ styles.container }>
      <Header />
      <section className={ styles.requestsContainer }>
        {filterSaleSeller().map((sale) => (
          <Link key={ sale.id } to={ `/seller/orders/${sale.id}` }>
            <RequestCard
              dataTestId={ dataTestisSeller }
              requestId={ sale.id }
              status={ sale.status }
              date={ formatDate(sale.saleDate) }
              price={ sale.totalPrice }
              address={ sale.deliveryAddress }
              number={ sale.deliveryNumber }
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
