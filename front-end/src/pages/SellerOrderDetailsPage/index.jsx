/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import SellerOrderDetails from '../../components/SellerOrderDetails';
/* import OrderDetails from '../../components/OrderDetails'; */
import { useSellerOrderDetails } from '../../context/sellerOrderDetailsProvider';
import fetchSale from '../../services/ClientOrderDetailsPage/fetchSale';
import styles from './styles.module.css';
import { dataTestIdsSellerOrderDetails } from '../../utils/dataTestIds';

export default function SellerOrderDetailsPage() {
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
      <section className={ styles.container }>
        <div className={ styles.orderDetailsContainer }>
          <SellerOrderDetails dataTestIds={ dataTestIdsSellerOrderDetails } />
        </div>
      </section>
    </main>
  );
}
