import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import { usePrice } from '../../context/productsProvider';
import replaceDotToComma from '../../services/productPages/replaceDotToComa';
import styles from './styles.module.css';

export default function ProductPage() {
  const [data, setData] = useState([]);
  const { totalPrice, setTotalPrice, putItem } = usePrice();

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/customer/products')
      .then((response) => response.json())
      .then((item) => setData(item));
  }, []);

  const calculateTotalPrice = () => {
    const prices = putItem
      .reduce((acc, item) => Number(item.price) * item.quantity + acc, 0);
    setTotalPrice(prices.toFixed(2));
  };

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
            calculateTotalPrice={ calculateTotalPrice }
          />
        )) }
      </div>
      <button
        type="button"
        disabled={ Number(totalPrice) === 0 }
        className={ styles.cartBtn }
        data-testid="customer_products__button-cart"
        onClick={ () => navigate('/customer/checkout') }
      >
        <span>Ver Carrinho: R$</span>
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          { replaceDotToComma(totalPrice) }
        </span>
      </button>
    </div>
  );
}
