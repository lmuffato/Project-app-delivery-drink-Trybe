import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import { usePrice } from '../../context/productsProvider';
import styles from './styles.module.css';

export default function ProductPage() {
  const [data, setData] = useState([]);
  const { totalPrice, setTotalPrice, putItem } = usePrice();

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((item) => setData(item));
  }, []);

  useEffect(() => {
    const prices = putItem
      .reduce((acc, item) => Number(item.price) * item.quantity + acc, 0);
    setTotalPrice(prices);
  }, [putItem]);

  return (
    <div>
      <Header />
      <div className={ styles.products }>
        { data && data.map(({ id, name, price, urlImage }) => (
          <ItemCard
            id={ id }
            key={ id }
            name={ name }
            price={ price }
            image={ urlImage }
          />
        )) }
      </div>
      <span>Ver Carrinho: R$</span>
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        { totalPrice }
      </span>
    </div>
  );
}
