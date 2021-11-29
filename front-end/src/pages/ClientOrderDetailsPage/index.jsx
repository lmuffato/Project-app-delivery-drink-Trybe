/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import OrderDetails from '../../components/OrderDetails';
/* import { useOrderDetails } from '../../context/orderDetailsProvider'; */
import fetchSale from '../../services/ClientOrderDetailsPage/fetchSale';
import styles from './styles.module.css';
import { dataTestIdsClientOrderDetails } from '../../utils/dataTestIds';
import { useSellerOrderDetails } from '../../context/sellerOrderDetailsProvider';

export default function ClientOrderDetailsPage() {
  const { setSale, setSeller, setProducts } = useSellerOrderDetails();
  const { id } = useParams();

  useEffect(() => {
    const getSales = async () => {
      const data = await fetchSale(id);
      setSeller(data.seller);
      setProducts(data.products);
      setSale(data);
    };
    getSales();
  }, [id, setProducts, setSale, setSeller]);

  return (
    <main>
      <Header />
      <h3>Detalhes do Pedido</h3>
      <section className={ styles.container }>
        <div className={ styles.orderDetailsContainer }>
          <OrderDetails dataTestIds={ dataTestIdsClientOrderDetails } />
        </div>
      </section>
    </main>
  );
}
