import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import { usePrice } from '../../context/productsProvider';
import replaceDotToComma from '../../services/productPages/replaceDotToComa';
import useFetch from '../../hooks/useFetch';
import styles from './styles.module.css';
import { productsEndPointData } from '../../utils/endPointsData';

export default function ProductPage() {
  const { endpoint } = productsEndPointData;
  const { data: products, error, loading } = useFetch(endpoint);
  const { totalPrice } = usePrice();
  const navigate = useNavigate();

  if (loading) return <span>Carregando...</span>;

  if (error) console.log(error);

  return (
    <div>
      <Header />
      <div className={ styles.products }>
        { products.map(({ id, name, price, urlImage }) => (
          <ItemCard
            id={ id }
            key={ id }
            name={ name }
            price={ price }
            image={ urlImage }
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
